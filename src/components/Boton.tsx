import React from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface propsboton  {
 text: string,
 onpress?: ()=> void,
}

const Boton = ({text, onpress}:propsboton) => { 
const insets = useSafeAreaInsets();
  return (
    <View style={{
        flex: 1,
        marginTop: insets.top,
      }}>
        <TouchableOpacity onPress={onpress}>
            <View style={{
                backgroundColor: 'red',
                marginTop: 10,
            }}>
            <Text>{text}</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};

export default Boton;
