import React from 'react';
import {history} from "../../../app/store";
import LoginContainer from "../../../app/login/container/LoginContainer";
import {ConnectedRouter} from 'connected-react-router';
import Main from "../../../app/main/Main";
import ProtectedRoute from "../../../app/common/router/ProtectedRoute";
import LoginRoute from "../../../app/common/router/LoginRoute";
import {connect} from 'react-redux';
import {isLoggedIn} from "../../jwt-utils";

const Router = ({token}) => (
  <ConnectedRouter history={history}>
    <LoginRoute path="/login" component={LoginContainer} exact isLoggedIn={isLoggedIn(token)}/>
    <LoginRoute path="/" component={LoginContainer} exact isLoggedIn={isLoggedIn(token)}/>
    <ProtectedRoute path="/home" component={Main} exact isLoggedIn={isLoggedIn(token)}/>
  </ConnectedRouter>
);

const mapStateToProps = (state) => ({
  token: state.user.token
});

export default connect(mapStateToProps)(Router)