import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetallesScreen from '../screens/DetallesScreen';
import HomeScreen from '../screens/HomeScreen';
import { Noticias } from '../interfaces/NoticiasInterfaces';

// export type stackNavegacionParam = {
//     HomeScreen: undefined,
//     DetallesScreen: undefined,
// }

export type RootStackParams ={
  HomeScreen: undefined,
  DetallesScreen: {item: Noticias},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavegacion = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor:'white',
        },
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetallesScreen" component={DetallesScreen} />
    </Stack.Navigator>
  );
};
