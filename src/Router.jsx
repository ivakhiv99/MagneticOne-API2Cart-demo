import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Products from './Components/Products'
import Clients from './Components/Clients'
import Orders from './Components/Orders'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/products' component={Products} />
        <Route path='/clients' component={Clients} />
        <Route path='/orders' component={Orders} />
    </Switch>
)

export default Router;