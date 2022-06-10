import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../screens/Auth';

const Stack = createNativeStackNavigator();

const PublicRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default PublicRoute;
