import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navegacion/StackNavegacion';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props extends StackScreenProps<RootStackParams,'DetallesScreen'>{}

const DetallesScreen = ({route}:Props) => {
  const insets = useSafeAreaInsets();
  console.log(route.params);
  const {title, author, description, publishedAt, urlToImage} = route.params.item;
  return (
    <View style={{
      flex:1,
      marginTop: insets.top,
    }}>
       {urlToImage ? <Image source={urlToImage} style={styles.imagen}/> : undefined}
        <Text style={styles.tituloTexto}>{title}</Text>
        <Text >{publishedAt}</Text>
        <Text>{description}</Text>
        <Text style={styles.tituloTexto}>{author}</Text>
        
    </View>
  );
};
export default DetallesScreen;
const styles = StyleSheet.create({
  tituloTexto:{
    fontSize:25,
    color:'black',
    marginTop:15,
    margin:5,
  },
  imagen:{
    height:100,
    width:'auto',
  },
});
