import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetallesScreen from '../screens/DetallesScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const StackNavegacion = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetallesScreen} />
    </Stack.Navigator>
  );
};