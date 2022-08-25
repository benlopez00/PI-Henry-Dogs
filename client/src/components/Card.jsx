import React from "react";

export default function Card({img, name, temper}){
    return(
        <div>
            <img src={img} alt="hola"/>
            <h2>{name}</h2>
            <h3>{temper}</h3>
        </div>
    )
}


// - [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
// - [ ] Altura
// - [ ] Peso
// - [ ] Años de vida