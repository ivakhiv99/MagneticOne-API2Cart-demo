import React from 'react';
import ClientItem from './ClientItem';

const Clients = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    return (
        <div className='clients'>
            <div className='clients__grid'>
                {arr.map(()=><ClientItem/>)}
           </div>
        </div>
    )
}

export default Clients;