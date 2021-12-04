//Main

import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/ApiMercadoGrid";

const MercadoLibreApp = () => {

    // Por defecto el arreglo tendra el primer valor de asigando por el useState
    const [categories, setCategories] = useState(['Ipad']);


    //Codigo Html
    return (
        <>
            {/*Titulo*/}
            <h2>Mercado Libre</h2>

            {/*Componente AddCategory para pasar setCategories atraves del props en el buscador AddCategory*/}
            <AddCategory setCategories={setCategories} />
            <hr/>

            {/*Lista de Productos*/}
            <ol>
                {
                    categories.map(category => (
                        //return <li key={category}> {category}</li>
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}


export default MercadoLibreApp;
