// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// export const selectContacts = async () => {
//   const data = await instance.get('/');
//   return data;
// };

import instance from './auth-api';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
