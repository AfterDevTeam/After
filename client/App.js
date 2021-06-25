/** @format */
// import package modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
// import CSS
import './App.css';
// import components
import SplashPage from './components/SplashPage';
// react router
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SplashPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;