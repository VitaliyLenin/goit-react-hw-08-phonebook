import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'Redux/auth/auth-selector';
import { logout } from 'Redux/auth/auth-operations';

import { Link } from 'react-router-dom';

import css from './navbar.module.css';

const NavbarUser = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const { name } = useSelector(getUser);
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Welcome, {name} </p>
      <Link className={css.link} onClick={onLogout}>
        Log out
      </Link>
    </div>
  );
};

export default NavbarUser;
