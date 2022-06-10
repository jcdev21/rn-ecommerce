export const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {...state, token: action.token};
    case 'SIGN_IN':
      return {
        ...state,
        isSignout: false,
        token: action.token,
        typeLogin: action.typeLogin,
      };
    case 'SIGN_OUT':
      return {...state, isSignout: true, token: null, typeLogin: null};
    default:
      return state;
  }
};
