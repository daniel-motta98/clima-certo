import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import InformationWeather from '../screens/InformationWeather';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
    >
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name={'Informações'}
        component={InformationWeather}
      />
    </Stack.Navigator>
  );
}

export default Routes;