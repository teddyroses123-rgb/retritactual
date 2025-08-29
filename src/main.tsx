import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug: проверяем, что main.tsx выполняется
console.log('main.tsx executing...');
console.log('DOM loaded:', document.readyState);

// Убеждаемся, что root элемент существует
const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
console.log('React root created');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log('React app rendered');
