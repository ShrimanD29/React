import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Logo from './Logo';
import WebName from './WebName';
import Description from './Description';
import Price from './price';
import reportWebVitals from './reportWebVitals';
import Button from './button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo />
    <WebName/>
    <App />
    <Description/>
    <Price/>
    <Button/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
