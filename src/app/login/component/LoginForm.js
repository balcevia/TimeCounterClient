import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../common/form-controls/Input";
import Button from "../../common/form-controls/Button";
import {FormNames} from "../../constants";
import {ColumnForm, InlineDiv, StyledPaper} from "./LoginFormSyles";
import {required} from '../../common/validators';

const LoginForm = ({handleSubmit, invalid, history}) => {
  return (
    <StyledPaper>
      <ColumnForm onSubmit={handleSubmit}>
        <Field component={Input} label="Username" name="username" type="text" validate={required}/>
        <Field component={Input} label="Password" name="password" type="password" validate={required}/>
        <InlineDiv>
          <Button type="submit" label="Sign in" disabled={invalid}/>
          <Button label="Sign up" onClick={() => history.push('/sign-up')}/>
        </InlineDiv>
      </ColumnForm>
    </StyledPaper>
  )
};

export default reduxForm({form: FormNames.Login})(LoginForm);