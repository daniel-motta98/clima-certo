import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import InformationWeather from '../screens/InformationWeather';
import Cities from '../screens/Cities';
import About from '../screens/About';

import themes from '../global/themes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          headerShown: false,
          headerTintColor: `${themes.colors.constrast0}`,
          headerStyle: styles.headerStackStyle,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Cities"
        component={Cities}        
        options={{
          title: 'Cidades',
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="file-text" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="About"
        component={About}
        options={{
          title: 'Sobre',
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
    >
      <Stack.Screen
        name={'Tabs'}
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name={'InformationWeather'}
        component={InformationWeather}
        options={{
          title: 'Próximas Previsões',
          headerTitleAlign: 'center',
          headerStyle: styles.headerStackStyle,
          headerTintColor: themes.colors.constrast0,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;

const styles = StyleSheet.create({
  headerStackStyle: {
    backgroundColor: `${themes.colors.primary}`,
  },
});