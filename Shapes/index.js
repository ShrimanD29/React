import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Class1 from './class1';
import Func1 from './func1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Class1/>
    <br></br>
    <Func1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
