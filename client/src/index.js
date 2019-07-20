import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initMiddleware } from 'devise-axios';
import { BrowserRouter } from 'react-router-dom';

initMiddleware();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
