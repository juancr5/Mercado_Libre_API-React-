import React from 'react'
import { Link } from 'react-router-dom'


const ApiMercadoGridItem = ({ title, url, id, price, city }) => {

    return (

        //color: 'inherit' le quita el color morado al los items dentro del ApiMercadoGridItem
        <Link to={`/producto/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {/*Clave unica del producto*/}

            <div className="card-grid-items animate__animated animate__pulse">
                <p>
                    <b>Id:</b> {id} <br/>
                    {title} <br/>
                    <b> Precio: </b> {price} COP <br/>
                    <b> Ubicacion del producto: </b> {city}
                </p>

                <img src={url} alt={title} />

            </div>

        </Link>
    )
}

export default ApiMercadoGridItem;