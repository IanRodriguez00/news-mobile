import { useEffect, useState } from 'react';
import noticiasDB from '../api/NoticiasBD';
import { noticiasDBNow, Noticias } from '../interfaces/NoticiasInterfaces';
const useNoticias = () => {
    const [noticiasNow, setNoticiaNow] = useState<Noticias[]>([]);

    const getNoticias = async () =>{
        const respuesta = await  noticiasDB.get<noticiasDBNow>('/top-headlines');
        setNoticiaNow(respuesta.data.articles);
    };
    useEffect(() =>{
       getNoticias();
      },[]);
  return (
    {noticiasNow}
  );
};

export default useNoticias;
