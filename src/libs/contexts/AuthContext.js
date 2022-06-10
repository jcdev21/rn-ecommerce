import React from 'react';
import {authReducer} from '../reducers/AuthReducer';
import {storage} from '../../storages/StorageMMKV';

const initialState = {
  token: storage.getString('token') || null,
  isSignout: storage.getString('token') ? false : true,
  typeLogin: storage.getString('type-login') || null,
};

export const AuthContext = React.createContext(initialState);
export const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
