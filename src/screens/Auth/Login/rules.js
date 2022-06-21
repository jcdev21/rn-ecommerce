export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email required',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Entered value does not match email format',
    },
  },
  password: {
    minLength: {
      value: 5,
      message: 'min length is 5',
    },
  },
};
