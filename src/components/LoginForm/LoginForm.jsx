import UseForm from 'shared/hooks/useForm';
import initialState from './initialState';
import FormField from 'shared/API/components/formField';
import fields from './fields';
import Button from 'shared/button/button';

import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = UseForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.loginpage_title}>
        <h2>Enter your account</h2>
      </div>
      <FormField value={email} handleChange={handleChange} {...fields.email} />
      <div className={css.iconInput_wrap}>
        <FormField
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
      </div>
      <Button> Sign in </Button>
    </form>
  );
};

export default LoginForm;
