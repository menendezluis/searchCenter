import React from 'react';

const Serie = ({serie}) => {
    //extraer serie

    const { name, image, premiered,officialSite} = serie.show;

    let photo = image;
    if (photo === null) {
        photo = ["https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png","0"];
    }
  
       const foto = Object.values(photo);

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={foto[0]} alt={name} className="card-img-top" />
            </div>
            <div className="card-body">

                <p className="card-text">{name}</p>
                <p className="card-text">{premiered} </p>
                
            </div>
            <div className="card-footer">
                <a
                href={officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block">Ver serie</a>
            </div>
        </div>
    );
}

export default Serie;