import React from 'react';

const ProductsScreenItem = ({ data }) => {

    return (
        <div className='container-fluid'>

            <div className="item mx-auto col-md-3 mt-4"> <img className='img-thumbnail' alt="imagen del producto" src={data.image} width="auto" height="auto" />
                {/*Caja de texto denajo de la imagen*/}
                <div className="item-body text-center mx-auto">

                    <h5 className="item-title font-weight-bold">{data.title}</h5>
                    <br/>
                    <p><b>Precio:</b> ${data.price}</p>
                    <p>
                        <b> Id del producto: </b> {data.id} <br />
                        <b>Cantidades vendidas:</b> {data.sold_quantity}
                    </p>
                    <button className="btn cart px-auto">ADD TO CART</button>

                </div>
            </div>
        </div>
    )

};
export default ProductsScreenItem;
