import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import  store  from '../src/store/cart/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename="/diplom-project">
   <Provider store={store}>
     <App />
   </Provider>
   </BrowserRouter>
);