import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

Icon.loadFont();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;