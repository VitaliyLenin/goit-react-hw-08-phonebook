// import { useState } from 'react';
// import { Link } from 'react-router-dom';

import UseForm from 'shared/hooks/useForm';
import initialState from './initialState';
import FormField from 'shared/API/components/formField';
import fields from './fields';

import Button from 'shared/button/button';

import css from './registerForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = UseForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <div className={css.homepage_wrap}>
      <h2 className={css.homepage_title}>Create account</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <FormField value={name} handleChange={handleChange} {...fields.name} />
        <FormField
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <div className={css.iconInput_wrap}>
          <FormField
            value={password}
            handleChange={handleChange}
            {...fields.password}
          />
        </div>

        <Button> Create account </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
