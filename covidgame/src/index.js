import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react"; 
import * as serviceWorker from "./serviceWorker"; 
import CheckLogin from "./Components/CheckLogin"
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
     domain="covidgame.us.auth0.com"
     clientId="VlaZ9zfoJv9GxQaqgT2qccP6noNdDYp4"
     redirectUri={window.location.origin}
    >
      <CheckLogin/>

    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
