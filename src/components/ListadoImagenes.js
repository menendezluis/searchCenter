import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {

    return(
        <div><h1 align="center">Imagenes</h1> 
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen 
                key={imagen.id}
                imagen={imagen}/>
            ))}

        </div>
        </div>
        
    );
}
export default ListadoImagenes