import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from './formField.module.css';

const FormField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <>
      <label htmlFor={id} className={css.label}>
        {label}

        <input
          id={id}
          onChange={handleChange}
          {...props}
          className={css.field}
        />
      </label>
    </>
  );
};

export default FormField;
