import React from 'react';
import useNoticias from '../hooks/useNoticias';
import Boton from '../components/Boton';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props extends StackScreenProps<any, any>{}


const HomeScreen = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const {noticiasNow} = useNoticias();
  return (
    <View style={{
      flex: 1,
      marginTop: insets.top,
    }}>
       <FlatList
    data={noticiasNow}
    keyExtractor={(id) =>id.title}
    renderItem={({item}) => (<Boton item={item} onpress={()=>{navigation.navigate('DetallesScreen',{item})}} />
      )}
    />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  contenedor:{

  },
})

