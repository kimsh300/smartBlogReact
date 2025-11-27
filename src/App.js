import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Spring Boot API 호출
    api.get('/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(err => {
        console.error('Error:', err);
        setError('Backend 연결 실패. Spring Boot 서버가 실행 중인지 확인하세요.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Smart Blog</h1>
        <div style={{ marginTop: '20px' }}>
          {error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <>
              <p>✅ Backend 연결 성공!</p>
              <p>메시지: {message}</p>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;