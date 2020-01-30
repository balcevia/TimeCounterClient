import React from 'react';
import {history} from "../../../app/store";
import LoginContainer from "../../../app/login/container/LoginContainer";
import {ConnectedRouter} from 'connected-react-router';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import MainContainer from "../../main/container/MainContainer";
import RegistrationContainer from "../../registration/container/RegistrationContainer";

const Router = ({}) => (
  <ConnectedRouter history={history}>
    <Route path="/login" component={LoginContainer} exact/>
    <Route path="/" component={LoginContainer} exact/>
    <Route path="/home" component={MainContainer} exact/>
    <Route path="/sign-up" component={RegistrationContainer} exact/>
  </ConnectedRouter>
);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Router)