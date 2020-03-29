import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [activeLink, setActive] = useState(0);
   
    const handleClick = (event) => {
        const list = Array.from(document.getElementsByClassName('nav__list')[0].childNodes);
        list.map((item) => {
            const parent = event.target.parentNode;
            if(item === parent){
                item.classList.remove('nav__item');
                item.classList.add('nav__item--active');
                setActive(list.indexOf(item))
            } else {
                item.classList.remove('nav__item--active');
                item.classList.add('nav__item');
            }
        });
    }

    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className='nav__item--active'>
                    <Link 
                      to='/products'
                      onClick={handleClick}
                    >
                        <img 
                          src={activeLink === 0 ? require('../img/productsWhite.png') : require('../img/products.png')} 
                          alt='Products' 
                          className='nav__icon'
                        />
                        Products
                    </Link>
                </li>
                
                <li className='nav__item'>
                    <Link 
                      to='/orders'
                      onClick={handleClick}
                    >
                        <img 
                          src={activeLink === 1 ? require('../img/ordersWhite.png'): require('../img/orders.png')} 
                          alt='Orders' 
                          className='nav__icon'
                        />
                        Orders
                    </Link>
                </li>

                <li className='nav__item'>
                    <Link 
                      to='/clients'
                      onClick={handleClick}    
                    >
                        <img 
                          src={activeLink === 2 ? require('../img/clientsWhite.png') : require('../img/clients.png')} 
                          alt='Clients' 
                          className='nav__icon'
                        />
                        Clients
                    </Link>
                </li>
            </ul>
        </div>
    ); 
}

export default Navigation;