import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import "./App.css"
import {originals,action}from './urls'

import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
   <Navbar/> 
   <Banner/>
   <RowPost url={action} title='Action'/>
   <RowPost  url={originals} title='Netflix Originals' isSmall />
    </div>
  );
}

export default App;
