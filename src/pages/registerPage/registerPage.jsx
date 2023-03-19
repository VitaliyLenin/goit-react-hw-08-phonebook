import { useDispatch } from 'react-redux';

import { signup } from 'shared/API/auth-api';

import RegisterForm from 'components/RegisterForm/registerForm';

import css from './registerPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
  return (
    <div className={css.container}>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
