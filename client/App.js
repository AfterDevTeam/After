/** @format */
// import package modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

// import CSS
import './App.css';

// import components
import SplashPage from './components/SplashPage';

// react router
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SplashPage}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
