import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import { BrowserRouter as Router} from "react-router-dom";
import HelmetComponent from './components/helmet/HelmetComponent';
import AppContextProvider from './context/AppContextProvider';

// third party css //
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
     <HelmetComponent title="Clique app"/>
     <App />
    </AppContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
