import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage/";
import Login from "../Pages/Auth/Signin";
import NavBar from "../containers/NavBar";
import Signup  from "../Pages/Auth/Signup"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Signin" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
