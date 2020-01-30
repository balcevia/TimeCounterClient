import React from 'react';
import {Redirect, Route} from "react-router-dom";

const LoginRoute = ({component: Component, isLoggedIn, ...other}) => {

  return (
    <Route {...other} render={(props) => !isLoggedIn ? <Component {...props}/> : <Redirect to="/home"/>}/>
  )
};

export default LoginRoute;