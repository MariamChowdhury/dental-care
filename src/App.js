import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import Error from "./Components/ErrorPage/Error";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
import Login from "./Components/LoginPage/Login";
import Dashboard from "./Components/Dashboard/DashBoard/DashBoard";
import Patient from "./Components/Dashboard/Patient/Patient";
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import PrivateRoute from "./Components/LoginPage/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/appointments">
           <Dashboard />
          </PrivateRoute>
          <Route path="/patient">
           <Patient />
          </Route>
          <Route path="/addADoctor">
         <AddDoctor />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
