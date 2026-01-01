import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// i18n 초기화
import './i18n';

// 스타일
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
