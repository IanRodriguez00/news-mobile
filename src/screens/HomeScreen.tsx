import React from 'react';
import useNoticias from '../hooks/useNoticias';
import Boton from '../components/Boton';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}
const HomeScreen = ({navigation}: Props) => {
  const {noticiasNow} = useNoticias();
  console.log(noticiasNow[4]?.title);
  return (
    <Boton onpress={() => navigation.navigate('DetallesScreen')}
    text={noticiasNow[4]?.title}/>
  );
};

export default HomeScreen;
