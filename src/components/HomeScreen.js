import React, { useContext } from 'react'
import { CategoriesContext } from './CategoriesContext'
import AddCategory from "./AddCategory"
import ApiMercadoGrid from './mercado-grid/ApiMercadoGrid'



const HomeScreen = () => {

    // Se importa el useState desdel el useContext de Categories
    const { categories, setCategories } = useContext(CategoriesContext)

    return (
        <>
            {/*Titulo*/}
            < h1 className= "title"> Mercado Online</h1 >

            {/*Buscador, componente AddCategory que le pasa el setCategories atraves del props en el buscador*/}
            < AddCategory setCategories={setCategories} />
            <hr />

            {console.log(categories)}

            {/*Lista de Productos*/}
            <ApiMercadoGrid category={categories} />
    
        </>
    );
}

export default HomeScreen;