import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Access, FormNames} from "../../constants";
import Input from "../../common/form-controls/Input";
import {required} from '../../common/validators';
import Select from "../../common/form-controls/Select";
import FilePicker from "../../common/form-controls/FilePicker";
import Button from "../../common/form-controls/Button";

const NewLineForm = ({handleSubmit, onClose, invalid}) => {
  return (
    <form onSubmit={handleSubmit}
          style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between", width: '500px'}}>
      <Field component={Input} label="Filename" name="filename" type="text" validate={required}/>
      <Field component={Select} label="Access" name="isPublic" validate={required} values={Access}/>
      <Field name="file" component={FilePicker} validate={required}/>

      <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', width: '170px', justifyContent: 'space-between', alignSelf: 'flex-end'}}>
        <Button type="submit" label="Add" key={"add"} disabled={invalid}/>
        <Button label="Cancel" key={"cancel"} onClick={onClose}/>
      </div>
    </form>
  );
};

export default reduxForm({form: FormNames.NewFile})(NewLineForm);