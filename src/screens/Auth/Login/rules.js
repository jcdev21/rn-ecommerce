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
    required: {
      value: true,
      message: 'Password required',
    },
    minLength: {
      value: 5,
      message: 'Minimal length is 5',
    },
  },
};
