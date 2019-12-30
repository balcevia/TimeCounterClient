import React from 'react';
import LoginForm from "../component/LoginForm";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import loginOperations from '../duck/operations';

const LoginContainer = ({loginOperations}) => {
  return (
    <LoginForm onSubmit={loginOperations.sendLoginRequest}/>
  )
};

const mapDispatchToProps = (dispatch) => ({
  loginOperations: bindActionCreators(loginOperations, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginContainer)