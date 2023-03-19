import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://640a284e6ecd4f9e18c68a47.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  return data;
};
