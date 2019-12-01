import React from 'react';
import './App.css';

import Navbar from '../src/components/Navbar/Navbar'
import Map from '../src/components/Map/Map'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Map></Map>
    </div>
  );
}

export default App;
