import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from "./Nav.js"
import Slider from "./Slider.js"
import Productslist from './Productslist.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<App />
   
</BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();