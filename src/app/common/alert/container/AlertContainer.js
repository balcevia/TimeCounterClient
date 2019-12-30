import React from 'react';
import Alert from "../component/Alert";
import {bindActionCreators} from "redux";
import alertOperations from "../duck/operations";
import {connect} from 'react-redux';

const AlertContainer = ({alertOperations, open, message}) => {
  return (
    <Alert onClose={alertOperations.hideAlert} open={open} message={message}/>
  )
};

const mapStateToProps = (state) => ({
  open: state.alert.open,
  message: state.alert.message
});

const mapDispatchToProps = (dispatch) => ({
  alertOperations: bindActionCreators(alertOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);