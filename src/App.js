import React, { useState, useContext } from 'react';
import './App.css';
import injectContext from './store/appContext';
import Test from './views/test';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);


