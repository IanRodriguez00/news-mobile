import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate('DetallesScreen')}>
          <Text>Leer más</Text>
          </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
