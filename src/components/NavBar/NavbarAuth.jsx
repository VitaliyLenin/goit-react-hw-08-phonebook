import { NavLink } from 'react-router-dom';

import css from './navbar.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.navbarAuth}>
      <NavLink to="/register" className={css.link}>
        register
      </NavLink>
      |
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
