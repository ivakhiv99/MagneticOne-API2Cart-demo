import React, {useState} from 'react';


const ProductItem = () => (
    <div className='product'>
        <img 
        src='https://hottopic.scene7.com/is/image/HotTopic/12006017_hi?$pdp_hero_standard$' 
        alt='poduct'
        className='product__picture'
        /> 
        <h2 className='product__name'>Product name</h2>
        <p>product description...</p>
        <h5 className='product__sku'>SKU</h5>
        <span className='product__price'>$420</span>
        <p className='product__left-in'> 42 left in stock</p>
    </div>  
)

export default ProductItem;