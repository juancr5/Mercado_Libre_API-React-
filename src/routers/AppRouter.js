import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../components/HomeScreen';
import ProductsScreen from '../components/products-screen/ProductsScreen';
//import MercadoLibreApp from '../MercadolibreApp';


const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="producto/:productId" element={<ProductsScreen/>} />
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;