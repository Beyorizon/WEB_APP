import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AgencyProvider } from './contexts/AgencyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AgencyProvider>
      <App />
    </AgencyProvider>
  </React.StrictMode>
);
