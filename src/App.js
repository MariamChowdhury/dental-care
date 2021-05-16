import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import Error from './Components/ErrorPage/Error';
import Appointment from './Components/AppointmentPage/Appointment/Appointment';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/appointment'>
        <Appointment />
        </Route>

        <Route path ='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
