import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavegacion } from './src/navegacion/StackNavegacion';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavegacion/>
    </NavigationContainer>
  );
};

export default App;
