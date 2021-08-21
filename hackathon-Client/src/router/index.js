import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage/";
import Login from "../Pages/Auth/Signin";
import NavBar from "../containers/NavBar";
import Books from "../Pages/Books";
import Stationary from "../Pages/Stationary";
import Signup from "../Pages/Auth/Signup";
import SingleProduct from "../Pages/SinglePage/";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Signin" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/stationary" component={Stationary} />
        <Route path="/SingleProduct/:id/:type" component={SingleProduct} />

      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
