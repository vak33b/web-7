import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const fetchGreeting = async () => {
    try {
      const response = await axios.get(`http://localhost:8083/api/user?name=${name}`);
      setGreeting(response.data);
    } catch (error) {
      console.error('Ошибка при получении приветствия:', error);
    }
  };

  return (
    <div>
      <h1>Введите ваше имя</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={fetchGreeting}>Отправить</button>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;