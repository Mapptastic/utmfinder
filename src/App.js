import React, { useState, useEffect } from 'react';
import './App.css';

import Map from '../src/components/Map/Map';
import Modal from '../src/components/Modal/Modal';
import Navbar from '../src/components/Navbar/Navbar';


function App() {
  let [appState, setAppState] = useState({ showModal: true, geolocationPermission: false });
  useEffect(() => {
    console.log('Use Effect Call!')
    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
      if (result.state === 'granted') {
        setAppState({
          geolocationPermission: true,
          showModal: false
        });
      } else {
        setAppState({
          geolocationPermission: false,
          showModal: true
        });
      }
    });
  }, []);

  const hideModal = () => {
    setAppState({
      ...appState,
      showModal: false
    });
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      {appState.geolocationPermission ?
        <Map /> :
        <Modal
          show={appState.showModal}
          handleClose={hideModal}
        >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      }
    </div>
  );
}

export default App;
