import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS Bootstrap
import 'sweetalert2/src/sweetalert2.scss';

import './index.css';
import App from './App';

import 'jquery';
import 'popper.js';
import 'bootstrap'; // JS Bootstrap

import * as $ from 'jquery';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


$(function () {
  $('[data-toggle="popover"]').popover()
})