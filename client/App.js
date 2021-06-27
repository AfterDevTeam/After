/** @format */
// import package modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

// import CSS
import './App.css';
// import components
import Navbar from './components/Navbar';
import SplashPage from './components/SplashPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BurialPlan from './components/BurialPlan';
import ServicePlan from './components/ServicePlan';
import SignUp from './components/SignUp';

// react router
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup'component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/burial-plan' component={BurialPlan} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;