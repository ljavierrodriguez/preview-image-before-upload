import React, { useState, useContext } from 'react';
import './App.css';
import injectContext from './store/appContext';
import Test from './views/test';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Test} />
    </BrowserRouter>
  )
}

export default injectContext(App);


