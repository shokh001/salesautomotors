import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CreatNewJobContextProvider } from 'context/createNewJobContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreatNewJobContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CreatNewJobContextProvider>
  </React.StrictMode>
);
