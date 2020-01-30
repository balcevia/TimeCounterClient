import React from 'react';
import DialogContainer from "../../common/dialog/container/DialogContainer";
import {DialogNames} from "../../constants";
import NewFileForm from "../component/NewFileForm";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import operations from '../duck/operations';
import dialogOperations from '../../common/dialog/duck/operations';

const NewFileDialogContainer = ({operations, dialogOperations}) => {

  const submitForm = (formValues) => {
    operations.onSubmit(formValues);
    dialogOperations.close(DialogNames.NewFileDialog);
  };

  return (
    <DialogContainer name={DialogNames.NewFileDialog} title={"Add New File"}>
      <NewFileForm onSubmit={submitForm} onClose={() => dialogOperations.close(DialogNames.NewFileDialog)}/>
    </DialogContainer>
  )
};

const mapDispatchToProps = (dispatch) => ({
  operations: bindActionCreators(operations, dispatch),
  dialogOperations: bindActionCreators(dialogOperations, dispatch)
});

export default connect(null, mapDispatchToProps)(NewFileDialogContainer);