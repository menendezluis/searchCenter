import React, { useState } from "react";
import Error from './Error';
import { useParams, Link } from 'react-router-dom';

const Formulario = ({guardarBusqueda}) => {
    const {parametroRuta} = useParams();
    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);
       
    const buscar = e => {
         e.preventDefault();
    
    //validar
    if(termino.trim() === ''){
        guardarError(true);
        return;
    }
    guardarError(false);
    guardarBusqueda(termino);
    
    }
    
    if (parametroRuta !== '') {
        guardarBusqueda(parametroRuta);
       }
    
    //enviar el termino de busqueda hacia el componente principal
    return(
        <div>
        <form
            onSubmit={buscar}
        >
            
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text"
                    className="form-control form-control-lg"
                    placeholder="Buscar contenido multimedia, ejemplo: Madonna, Batman, Caribe"
                    onChange={e => guardarTermino(e.target.value)}
                     />
                </div>
                <div className="form-group col-md-4">
                    <Link to={`/buscar/${termino}`}>
                    <input type="submit"
                    className="btn btn-lg btn-danger btn-black"
                    value="Buscar"
                     /></Link>
                </div>
            </div>
            { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
        </div>
    );
    }

export default Formulario;