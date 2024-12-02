import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:8082/get');
      if (!response.ok) {
        throw new Error('Сеть не отвечает');
      }
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error('Ошибка:', error);
      setMessage('Ошибка загрузки сообщения');
    }
  };

  return (
    <div>
      <h1>Приложение на React</h1>
      <button onClick={fetchMessage}>Получить сообщение от сервера</button>
      <p>{message}</p>
    </div>
  );
}

export default App;