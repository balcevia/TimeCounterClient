import React from 'react';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, isLoggedIn, ...other}) => {
  return (
    <Route {...other} render={(props) => (isLoggedIn ? <Component {...props}/> : <Redirect to="/login"/>)}/>
  )
};

export default ProtectedRoute;