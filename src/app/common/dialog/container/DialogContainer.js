import React from 'react';
import {connect} from 'react-redux';
import DialogComponent from "../component/DialogComponent";
import {bindActionCreators} from "redux";
import dialogOperations from '../duck/operations';

const DialogContainer = ({name, dialogOperations, children, dialogs, ...other}) => {

  const isOpen = dialogs[name] || false;
  return (
    <DialogComponent isOpen={isOpen} onClose={() => dialogOperations.close(name)} {...other}>
      {children}
    </DialogComponent>
  )
};

const mapStateToProps = (state) => ({
  dialogs: state.dialog.dialogs
});

const mapDispatchToProps = (dispatch) => ({
  dialogOperations: bindActionCreators(dialogOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer)