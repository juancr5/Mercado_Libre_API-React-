import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductService } from '../../services/getProductService';
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductsScreenItem from './ProductsScreenItem';

const ProductsScreen = () => {

    const {productId} = useParams();
    const {data, loading} = useFetchProducts(productId, getProductService(productId));
    
    
    return (
        <div className = "animate__animated animate__jackInTheBox animate__slow">
            {loading && <p> Loading...</p>}

            <ProductsScreenItem data = {data}/>
        </div>
    )
}

export default ProductsScreen;
