import React from 'react';
import Personas from './Persona';

const ListadoPersona = ({personas}) => {

    return(
        <div><h1 align="center">Personas</h1> 
        <div className="col-12 p-5 row">
            {personas.map(persona => (
                <Personas 
                key={persona.id}
                persona={persona}/>
            ))}
        </div>
        </div>
    );
}
export default ListadoPersona