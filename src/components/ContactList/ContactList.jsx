import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
// import { deleteContact } from 'Redux/Contacts/contacts-operations';
// import { fetchContacts } from 'Redux/Contacts/contacts-operations';
// import {
//   fetchContacts,
//   deleteContact,
// } from 'Redux/Contacts/contacts-operations';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'Redux/Contacts/contacts-operations';

import css from './ContactList.module.css';

const MyContactList = () => {
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loading, setLoading] = useState({});
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchAllContacts());

    setLoadingContacts(false);
  }, [dispatch]);

  const handleRemoveContact = async contactId => {
    setLoading({ [contactId]: true });
    await dispatch(fetchDeleteContact(contactId));
    setLoading({ [contactId]: false });
  };

  return (
    <>
      {loadingContacts ? (
        <p>Loading..</p>
      ) : (
        <ul className={css.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactList__item}>
              <p className={css.contactList__name}>{name}: </p>
              <p className={css.contactList__number}>{number}</p>

              {!loading[id] ? (
                <button
                  className={css.button}
                  onClick={() => handleRemoveContact(id)}
                  type="button"
                >
                  Delete
                </button>
              ) : (
                <div className={css.loader}>Loading...</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MyContactList;
