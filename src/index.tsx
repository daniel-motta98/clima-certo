import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { SafeAreaView } from 'react-native-safe-area-context';

Icon.loadFont();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

export default App;