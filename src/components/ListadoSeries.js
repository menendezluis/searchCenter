import React from 'react';
import Series from './Serie';

const ListadoSeries = ({series}) => {

    return(
        <div><h1 align="center">Series</h1> 
        <div className="col-12 p-5 row">
            {series.map(serie => (
                <Series 
                key={serie.id}
                serie={serie}/>
            ))}
        </div>
        </div>
    );
}
export default ListadoSeries