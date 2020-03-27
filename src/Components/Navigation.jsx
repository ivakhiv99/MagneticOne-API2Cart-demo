import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <div className="nav">
        <ul className="nav__list">
            <li className="nav__item--active">
                <Link to='/products'>
                    <img src={require('../img/products.png')} alt='Products' className='nav__icon'/>
                    Products
                </Link>
            </li>
            <li className="nav__item">    
                <Link to='/clients'>
                    <img src={require('../img/clients.png')} alt='Clients' className='nav__icon'/>
                    Clients
                </Link>
            </li>
            <li className="nav__item">
                <Link to='/orders'>
                    <img src={require('../img/orders.png')} alt='Orders' className='nav__icon'/>
                    Orders
                </Link>
            </li>
        </ul>
    </div>
)

export default Navigation;