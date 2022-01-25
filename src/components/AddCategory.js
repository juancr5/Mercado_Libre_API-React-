import React, { useState } from "react";
import PropTypes from 'prop-types';

// Buscador del Producto
const AddCategory = ({setCategories}) => {
//recibe un setCategories

    const [inputValue, setInputValue] = useState('Ingrese el producto a buscar');

    //
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2 ) {
            // Asigna el valor del input al arreglo, lo puede concatenar a los otros valores establecidos o realizar una nueva busqueda
            //setCategories( cats => [...cats, inputValue]); 
            setCategories( cats => [inputValue]); 
            setInputValue('')
        }
    }


    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

//Obliga a pasar un SetCategories atraves del Props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
