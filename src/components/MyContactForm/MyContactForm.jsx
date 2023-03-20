import { useState } from 'react';

import { getAllContacts } from 'Redux/Contacts/contacts-selectors';
import { fetchAddContact } from 'Redux/Contacts/contacts-operations';

import { useSelector, useDispatch } from 'react-redux';

import css from './MyContactForm.module.css';

const MyContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = async ({ name, number }) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    await dispatch(fetchAddContact({ name, number }));

    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit = handleAddContact({ name, number });
  };

  return (
    <div className={css.phonebook_wrapper}>
      <form className={css.phonebook_form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={css.input}
          onChange={event => setName(event.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="contact name"
        />

        <label>Number</label>
        <input
          className={css.input}
          onChange={event => setPhone(event.target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder="contact number"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default MyContactForm;
