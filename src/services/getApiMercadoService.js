import { numberWithCommas } from "../hooks/auxiliaryFunctions";

export const getApiMercadoService = async (category) => {

    //Consumir la api y desestructurar la informacion
    //Category le pasara el parametro de la busqueda al query de la url
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${encodeURI(category)}&limit=12`;
    const resp = await fetch(url);
    const data  = await resp.json();
    const results = data.results;

    //Mostrar los resultados obtenidos
    //console.log(results)

    const products = results.map(products => {

        return {
            id: products.id,
            title: products.title,
            
            price: numberWithCommas(products.price),
            url: products.thumbnail,
            city: products.address.city_name
            
        }
    })

    return products;

}