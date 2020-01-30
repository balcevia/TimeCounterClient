import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../../common/form-controls/Input";
import Button from "../../common/form-controls/Button";
import {FormNames} from "../../constants";
import {ColumnForm, InlineDiv, StyledPaper} from "../../login/component/LoginFormSyles";
import {emailValidator, passwordValidator, required} from '../../common/validators';
import EntropyIndicator from "./EntropyIndicator";
import renderIf from 'render-if';

const RegistrationForm = ({handleSubmit, invalid, history, formValues}) => {

  return (
    <StyledPaper>
      <ColumnForm onSubmit={handleSubmit}>
        <Field component={Input} label="Username" name="username" type="text" validate={required}/>
        <Field component={Input} label="E-mail" name="email" type="text" validate={[required, emailValidator]}/>
        <Field component={Input} label="Password" name="password" type="password"
               validate={[required, passwordValidator]}/>
        {renderIf(formValues.password)(() => (
          <EntropyIndicator val={formValues.password}/>
        ))}
        <InlineDiv>
          <Button type="submit" label="Sing up" disabled={invalid}/>
          <Button label="Sign in" onClick={() => history.push('/login')}/>
        </InlineDiv>
      </ColumnForm>
    </StyledPaper>
  )
};

export default reduxForm({form: FormNames.Registration})(RegistrationForm);