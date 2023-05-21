import React from 'react'
import './Imagen.css'
export const Imagen = ({imageUrl, descripcion}) => {
  return (
    <div>
        <h1 className='titulo'>{descripcion}</h1>
        <img src = {imageUrl} alt = 'imagen'/>
    </div>
  );
};
