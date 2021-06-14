import React from 'react';
import Cancion from './Cancion';

const ListadoCanciones = ({canciones}) => {

    return(
        <div><h1 align="center">iTunes</h1> 
        <div className="col-12 p-5 row">
            {canciones.map(cancion => (
                <Cancion 
                key={cancion.id}
                imagen={cancion}/>
            ))}

        </div>
        </div>
        
    );
}
export default ListadoCanciones