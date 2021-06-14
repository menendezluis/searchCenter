
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';




const  ApiSearch = (props) => {
//state de la app
  
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ series, guardarSeries ] = useState([]);
  const [ personas, guardarPersonas ] = useState([]);
  const [ canciones, guardarCanciones ] = useState([]);

  const {parametroApi} = useParams();
   
const consultarApi = async () => {
      if(busqueda === '' ) return;
      //api busqueda de imagenes requiere un key de acceso
      const imagenesPorPagina = 8;
      const key = '20078252-fc3369c3a9adbb3bf23221313';
      const url = `https://pixabay.com/api/?key=${key}&q=${parametroApi}`;  
      
      //api busqueda de series
      const url2 = `http://api.tvmaze.com/search/shows?q=${parametroApi}`;  
      //api busqueda de personas
      const url3 = `http://api.tvmaze.com/search/people?q=${parametroApi}`; 
      //api Soap 
      const url4 = `https://itunes.apple.com/search?term=song+${parametroApi}`;

      const respuesta = await fetch(url);
      const respuesta2 = await fetch(url2);
      const respuesta3 = await fetch(url3);
      const respuesta4 = await fetch(url4);
      
      const resultado = await respuesta.json();
 
      const resultado2 = await respuesta2.json();
      const resultado3 = await respuesta3.json();
      const resultado4 = await respuesta4.json();
      
      guardarImagenes(resultado.hits);
      guardarSeries(resultado2);
      guardarPersonas(resultado3);
      guardarCanciones(resultado4.results);

     console.log(imagenes);
    }
  
  return imagenes;
}
export default ApiSearch;