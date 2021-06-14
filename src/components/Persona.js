import React from 'react';

const Persona = ({persona}) => {
    //extraer serie

    const { name, image, gender,url} = persona.person;
    console.log(typeof(image));
    let photo = image;
    if (photo === null) {
        photo = ["https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon-715x715.png","0"];
    }
    
       const foto = Object.values(photo);

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img src={foto[0]} alt={name} className="card-img-top" />
            </div>
            <div className="card-body">

                <p className="card-text">{name}</p>
                <p className="card-text">{gender} </p>
                
            </div>
            <div className="card-footer">
                <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info btn-block">Ver Perfil</a>
            </div>
        </div>
    );
}

export default Persona;