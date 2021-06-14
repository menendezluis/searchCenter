import React from 'react';

const Cancion = ({cancion}) => {
    //extraer imagen
    const {trackName, trackPrice,previewUrl} = cancion;
    const photo = "https://img.icons8.com/nolan/2x/26e07f/play.png";


    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={photo} alt={trackName} className="card-img-top" />
            </div>
            <div className="card-body">

            <p className="card-text">{trackName} </p>
                <p className="card-text">Comprar ${trackPrice}</p>
                
            </div>
            <div className="card-footer">
                <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info btn-block">Reproducir</a>
            </div>
        </div>
    );
}

export default Cancion;