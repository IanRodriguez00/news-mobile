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
      headerStyle:{
        shadowColor:'transparent',
        backgroundColor:'#20B2AA',
      },
        cardStyle:{
            backgroundColor:'white',
        },
    }}>
      <Stack.Screen name="HomeScreen" options={{title:"Noticias"}} component={HomeScreen} />
      <Stack.Screen name="DetallesScreen" options={{title:"Más"}} component={DetallesScreen} />
    </Stack.Navigator>
  );
};
