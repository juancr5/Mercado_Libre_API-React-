import { numberWithCommas } from "../hooks/auxiliaryFunctions";

export const getProductService = async (productId) => {

    //Consumir la api y desestructurar la informacion
    //Category le pasara el parametro de la busqueda al query de la url
    const url = `https://api.mercadolibre.com/items/${productId}`;
    const resp = await fetch(url);
    const data  = await resp.json();

    //Mostrar los resultados obtenidos
    //console.log(data)
    
    const carateristics = {
        id: data.id,
        title: data.title,
        price: numberWithCommas(data.price),
        sold_quantity: data.sold_quantity,
        image: data.pictures[0].url
    }

    return carateristics ;

}