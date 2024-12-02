import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    const response = await fetch('http://localhost:8081/count');
    const data = await response.json();
    setCount(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert('это не число');
      return;
    }

    await fetch('http://localhost:8081/count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: value }),
    });

    setInputValue('');
    fetchCount();
  };

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Увеличить счетчик</button>
      </form>
    </div>
  );
}

export default App;
