
import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
import ListadoSeries from './components/ListadoSeries';
import ListadoPersonas from './components/ListadoPersonas';



export default function App() {
//state de la app
  
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ series, guardarSeries ] = useState([]);
  const [ personas, guardarPersonas ] = useState([]);
 // const [ personas2, guardarPersonas2 ] = useState([]);

  const [ paginaActual, guardarPaginaActual ] = useState(1);
  const [ totalPaginas, guardarTotalPaginas] = useState(1);
   
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '' ) return;
      //api busqueda de imagenes requiere un key de acceso
      const imagenesPorPagina = 8;
      const key = '20078252-fc3369c3a9adbb3bf23221313';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}
      &page=${paginaActual}`;  
      //api busqueda de series
      const url2 = `http://api.tvmaze.com/search/shows?q=${busqueda}`;  
      //api busqueda de personas
      const url3 = `http://api.tvmaze.com/search/people?q=${busqueda}`; 
      //api Soap 
      //const url4 = `http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=GetListByName&name=${busqueda}`;

      const respuesta = await fetch(url);
      const respuesta2 = await fetch(url2);
      const respuesta3 = await fetch(url3);
      //const respuesta4 = await fetch(url4);
      
      const resultado = await respuesta.json();
 
      const resultado2 = await respuesta2.json();
      const resultado3 = await respuesta3.json();
      //const resultado4 = await respuesta4.json();
      guardarImagenes(resultado.hits);
      guardarSeries(resultado2)
      guardarPersonas(resultado3)

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth'})
    }
    consultarApi();
    
  }, [busqueda, paginaActual])

  //definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual -1;

    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);

  }

  //definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual +1;

    if(nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      
      <div className="jumbotron">
        <p className="lead text-center">Buscador de contenido</p> 
        <Formulario 
        guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
      <ListadoSeries series={series}/>
      </div>
      <div className="row justify-content-center">
      <ListadoPersonas personas={personas}/>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
        imagenes={imagenes}
        />
        {(paginaActual === 1) ? null : (
          <button
          type="button"
          className="btn btn-danger mr-1"
          onClick={paginaAnterior}>
            &laquo;Anterior 
          </button>
        )}
        { (paginaActual === totalPaginas) ? null :
                  <button
                  type="button"
                  className="btn btn-danger"
                  onClick={paginaSiguiente}>
                    Siguiente &raquo;
                  </button>}
      </div>
        
    </div>
  );
}