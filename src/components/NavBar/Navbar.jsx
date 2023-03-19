import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin } from 'Redux/auth/auth-selector';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavBarUser';

import css from './navbar.module.css';

const Navbar = () => {
  const isUserLogin = useSelector(isLogin);
  return (
    <div className={css.navbar_wrap}>
      <NavLink to="/" className={css.navbar_title}>
        Home
      </NavLink>
      {!isUserLogin ? <NavbarAuth /> : <NavbarUser />}
    </div>
  );
};

export default Navbar;
