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

import Checklist from './components/Checklist';
import Summary from './components/Summary';
import EditSummary from './components/EditSummary';

// state for rendering and preventing component load after log out.
import { useSelector } from 'react-redux';
import { loggedStatusState } from './slices/loggedStatusSlice'; 

// react router
const App = () => {

  const state = useSelector(loggedStatusState);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          { state.loggedStatus.loggedIn 
            ? <Route exact path='/dashboard' component={Dashboard} />
            : <Route exact path='/' component={SplashPage} />
          }     
          { state.loggedStatus.loggedIn 
            ? <Route exact path='/burial-plan' component={BurialPlan} />
            : <Route exact path='/' component={SplashPage} />
          }
          { state.loggedStatus.loggedIn
            ? <Route exact path='/service-plan' component={ServicePlan} />
            : <Route exact path='/' component={SplashPage} />
          }
          { state.loggedStatus.loggedIn
            ? <Route exact path='/checklist' component={Checklist} />
            : <Route exact path='/' component={SplashPage} />
          }
          { state.loggedStatus.loggedIn
            ? <Route exact path='/summary' component={Summary} />
            : <Route exact path='/' component={SplashPage} />
          }
          { state.loggedStatus.loggedIn
            ? <Route exact path='/edit' component={EditSummary} />
            : <Route exact path='/' component={SplashPage} />
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
