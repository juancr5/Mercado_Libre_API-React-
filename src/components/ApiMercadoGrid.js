import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifGridItem} from "./ApiMercadoGridItem";

const GifGrid = ({category}) => {

    //useFetchGifs recibe el atributo a buscar en la api
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p> Loading...</p>
            }
            <div className="card-grid">        
                {
                    
                    images.map(products => (
                        <GifGridItem
                            key={products.id}
                            {...products}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
