import React from "react"
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { getApiMercadoService } from '../../services/getApiMercadoService';
import ApiMercadoGridItem  from "./ApiMercadoGridItem";

const ApiMercadoGrid = ({category}) => {

    //useFetchProducts recibe el atributo a buscar en la api
    const {data: articles, loading} = useFetchProducts(category, getApiMercadoService(category));

    return (
        <>
            <h3>{category}</h3>
            {loading && <p> Loading...</p>}

            <div className="card-grid">
                {
                    articles.map((products) => (

                        <ApiMercadoGridItem
                            key={products.id}
                            {...products}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ApiMercadoGrid;
