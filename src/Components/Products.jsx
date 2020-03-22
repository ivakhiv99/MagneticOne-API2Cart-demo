import React, {useState} from 'react';
import ProductItem from './ProductItem';
const Products = () => {
    const [displayType, setDisplayType] = useState('grid');
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='products'>
            <div className='products__controls'>
                
            </div>
            <div className='products__grid'>
                {arr.map(()=><ProductItem/>)}
            </div>
        </div>
    )
}

export default Products;