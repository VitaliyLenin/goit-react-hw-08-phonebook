import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
import { deleteContact } from 'Redux/Contacts/contacts-operations';
import { fetchContacts } from 'Redux/Contacts/contacts-operations';

import css from './ContactList.module.css';

const MyContactList = () => {
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loading, setLoading] = useState({});
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchContacts());

    setLoadingContacts(false);
  }, [dispatch]);

  const handleRemoveContact = async contactId => {
    setLoading({ [contactId]: true });
    await dispatch(deleteContact(contactId));
    setLoading({ [contactId]: false });
  };

  // const names = contacts.map(({ id, name, phone }) => (
  //   <li key={id}>
  //     {name} : {phone}
  //     <button
  //       className={css.button}
  //       onClick={() => handleRemoveContact(id)}
  //       type="button"
  //     >
  //       Delete
  //     </button>
  //   </li>
  // ));

  // return (
  //   <div className={css.contacts_wrapper}>
  //     <ul className={css.contact_items}>{names}</ul>
  //   </div>
  // );

  return (
    <>
      {loadingContacts ? (
        'Loading...'
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
