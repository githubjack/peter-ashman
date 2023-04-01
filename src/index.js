import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
// import '/fonts/Inter-Medium.woff';
// import '/fonts/Inter-Regular.woff';
// import '/fonts/Jost-Regular.woff';
// import '/fonts/Jost-SemiBold.woff';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
