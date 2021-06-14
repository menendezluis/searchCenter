import React from 'react';
// Importamos el modulo necesario para obtener el parametro
import { useParams } from 'react-router-dom';

function Parametro() {

    // Obtenemos el parametro en esta variable
    const {id} = useParams();

    return(
        <div className="container">
            <h1>El Id es: {id}</h1>
        </div>
    )
}
export default Parametro;