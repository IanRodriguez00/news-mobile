import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Noticias } from '../interfaces/NoticiasInterfaces';

interface propsboton  {
 item: Noticias;
 onpress: ()=>void;
}
const Boton = ({item, onpress}:propsboton) => {
  const titulo = item.title;
  const uri = item.urlToImage;

  const descripcion = item.description;
  return (
    <View style={styles.Contenedor}>
      <View >
          {uri ? <Image source={{uri}} style={styles.imagen}/> : undefined}
      </View>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descripcionTexto}>{descripcion}</Text>
            <TouchableOpacity
            onPress={onpress}
            style={styles.leermas}>
                <Text style={styles.leermasTexto}
                >Leer más</Text>
            </TouchableOpacity>
            <View style={styles.separacion}></View>
    </View>
  );
};
export default Boton;

const styles = StyleSheet.create({
  Contenedor:{
    padding:20,
    marginBottom:20,
  },
  titulo:{
    fontSize:25,
    color:'black',
  },
  descripcionTexto:{
    fontSize:18,
  },
  leermas:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginBottom:2,
  },
  leermasTexto:{
    color:'blue',
    fontSize:16,
    textDecorationLine:'underline',
  },
  separacion:{
    backgroundColor:'gray',
    width:'auto',
    height:1,
  },
  imagen:{
    height:300,
    width:'auto',
  },
});
