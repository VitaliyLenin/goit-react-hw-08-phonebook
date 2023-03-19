import { Link } from 'react-router-dom';
// import SvgIconBook from '../../components/SvgIcon/SvgIconBook';

import css from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homepage}>
      <h1 className={css.title}>
        Welcome to Phonebook. After registration you will be able to add and
        manage your contacts.
      </h1>
      <Link to="/register" className={css.register_link}>
        Register
      </Link>
    </div>
  );
};

export default HomePage;
