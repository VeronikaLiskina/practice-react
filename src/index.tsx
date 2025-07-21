import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Или используйте вашу локальную функцию
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Вариант 1: Используем компонент из App.tsx
root.render(
    <App />
);

reportWebVitals();