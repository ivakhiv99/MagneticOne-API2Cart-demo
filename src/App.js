import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from './Router';
import Navigation from './Components/Navigation';

import './scss/app.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
