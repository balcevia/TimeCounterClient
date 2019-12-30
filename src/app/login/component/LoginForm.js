import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../common/form-controls/Input";
import Button from "../../common/form-controls/Button";
import {FormNames} from "../../constants";
import {ColumnForm, InlineDiv, StyledPaper} from "./LoginFormSyles";

const LoginForm = ({handleSubmit}) => {
  return (
    <StyledPaper>
      <ColumnForm onSubmit={handleSubmit}>
        <Field component={Input} label="Username" name="username" type="text"/>
        <Field component={Input} label="Password" name="password" type="password"/>
        <InlineDiv>
          <Button type="submit" label="Log in"/>
          <Button label="Sign up"/>
        </InlineDiv>
      </ColumnForm>
    </StyledPaper>
  )
};

export default reduxForm({form: FormNames.Login})(LoginForm);