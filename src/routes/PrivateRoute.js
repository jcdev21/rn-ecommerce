import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Main';
import {HeaderBar} from '../components';

const Tab = createBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{header: props => <HeaderBar {...props} />}}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
