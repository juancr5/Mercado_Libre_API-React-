//Main
import React, { useState} from "react";
import AppRouter from "./routers/AppRouter";
import { CategoriesContext } from "./components/CategoriesContext";


// Pagina Principal
const MercadoLibreApp = () => {

    // Por defecto el arreglo tendra el primer valor asigando por el useState
    const [categories, setCategories] = useState(['Ipad']);

    return (

        /*Crea una instancia en el arbol de componentes con el categories*/
        <CategoriesContext.Provider value={{categories, setCategories}}>
            <AppRouter/>
        </CategoriesContext.Provider>  
    );
}


export default MercadoLibreApp;
