import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

AOS.init({ 
  duration: 1200, 
  once: false,  
  mirror: true  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/ielts-institute-homepage">
    <App />
  </BrowserRouter>
);
