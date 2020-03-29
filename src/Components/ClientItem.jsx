import React, {useState} from 'react';


const ClientItem = () => (
    <div className='client'>
        <img 
        src='https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png' 
        alt='poduct'
        className='client__picture'
        /> 
        <h2 className='product__name'>Surname Name Middle name</h2>
        <p>something here as well</p>
        <h5 className='product__reg-date'>registrated 03.05.2019</h5>
    </div>  
)

export default ClientItem;