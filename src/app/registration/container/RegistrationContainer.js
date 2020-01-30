import React from 'react';
import RegistrationForm from "../component/RegistrationForm";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import {FormNames} from "../../constants";
import {getFormValues} from "redux-form";

const RegistrationContainer = ({operations, history, formValues}) => {
  return (
    <RegistrationForm onSubmit={operations.onSubmit} history={history} formValues={formValues || {}}/>
  )
};

const mapStateToProps = (state) => ({
  formValues: getFormValues(FormNames.Registration)(state)
});

const mapDispatchToProps = (dispatch) => ({
  operations: bindActionCreators(operations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);