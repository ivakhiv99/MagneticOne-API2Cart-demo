import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <div className="nav">
        <ul className="nav__list">
            <li className="nav__item"><Link to='/products'>Products</Link></li>
            <li className="nav__item"><Link to='/clients'>Clients</Link></li>
            <li className="nav__item"><Link to='/orders'>Orders</Link></li>
        </ul>
    </div>
)

export default Navigation;