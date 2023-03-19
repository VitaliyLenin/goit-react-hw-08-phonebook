import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Page not found</h1>
      <span className={css.text}>
        <p>
          Oops... Looks like you've found a page that's not in the Phonebook
        </p>
        <p>
          You can go to the main page
          <Link to="/" className={css.link}>
            main page
          </Link>
        </p>
      </span>
    </div>
  );
};

export default NotFoundPage;
