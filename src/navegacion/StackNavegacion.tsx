import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Detalles from '../screens/Detalles';

const Stack = createStackNavigator();

export const StackNavegacion = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
};