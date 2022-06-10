import React from 'react';
import {useAuth} from '../libs/contexts/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  const {state} = useAuth();

  return (
    <NavigationContainer>
      {state.token == null ? <PublicRoute /> : <PrivateRoute />}
    </NavigationContainer>
  );
};

export default Routes;
