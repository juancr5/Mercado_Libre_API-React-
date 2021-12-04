import React from 'react'

export const GifGridItem = ({ title, url, id, price, city }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <p>Precio: {price} COP</p>
            <p>Ubicacion del producto: {city} COP</p>
            <img src={url} alt={title}/>
        </div>
    )
}