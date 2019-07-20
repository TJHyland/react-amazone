import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initMiddleware } from 'devise-axios';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, } from './providers/AuthProvider';
import { CrudProvider } from './providers/CrudProvider';
import 'semantic-ui-css/semantic.min.css';


initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <CrudProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CrudProvider>
  </AuthProvider>,
  document.getElementById('root')
)
