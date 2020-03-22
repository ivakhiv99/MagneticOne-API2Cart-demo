import React, {useState} from 'react';


const ProductItem = () => (
    <div className='product'>
        <img 
        src='https://hottopic.scene7.com/is/image/HotTopic/12006017_hi?$pdp_hero_standard$' 
        alt='poduct'
        className='product__picture'
        /> 
        <h2>Product name</h2>
        <p>product description...</p>
        <h5>SKU</h5>
        <span>price</span>
        <p>left in stock</p>
    </div>  
)

export default ProductItem;