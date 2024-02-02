import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navegacion/StackNavegacion';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<RootStackParams,'DetallesScreen'>{}

const DetallesScreen = ({route}:Props) => {
  console.log(route.params.item.urlToImage);
  const insets = useSafeAreaInsets();
  console.log(route.params);
  const {title, author, description, publishedAt, urlToImage} = route.params.item;
  return (
    <View style={{
      flex:1,
      marginTop: insets.top,
    }}>
       {urlToImage ? <Image source={{uri:urlToImage}} style={styles.imagen}/> : undefined}
        <Text style={styles.tituloTexto}>{title}</Text>
        <Text style={styles.descipcion}>{description}</Text>
        <View style={styles.textoDateAutor}>
        <Text >{publishedAt}</Text>
        <Text>{author}</Text>
        </View>
    </View>
  );
};
export default DetallesScreen;
const styles = StyleSheet.create({
  tituloTexto:{
    justifyContent:'center',
    fontSize:25,
    color:'black',
    marginTop:15,
    margin:5,
  },
  imagen:{
    height:300,
    width:'auto',
  },
  descipcion:{
    fontSize:20,
    marginTop:10,
  },
  textoDateAutor:{
    fontSize:16,
    flex:1,
    alignItems:'flex-end',
    margin:15,
  },
});
