const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    autoFocus: true,
    label: 'User name',
    placeholder: 'Enter name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'Enter email',
  },
  password: {
    type: 'passwrod',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Enter password',
  },
};

export default fields;
