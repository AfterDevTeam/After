/** @format */
// import package modules
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
<<<<<<< HEAD

=======
import Navbar from './components/Navbar';
import BurialPlan from './components/BurialPlan';
import ServicePlan from './components/ServicePlan';
>>>>>>> 984ceb94b21e011ff33a4c8c03cb13798537d478
// import CSS
import './App.css';
// import components
import Navbar from './components/Navbar';
import SplashPage from './components/SplashPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BurialPlan from './components/BurialPlan';
// react router
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SplashPage} />
<<<<<<< HEAD
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/burial-plan' component={BurialPlan} />
=======
>>>>>>> 984ceb94b21e011ff33a4c8c03cb13798537d478
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
