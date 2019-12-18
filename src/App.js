import React, { useState } from 'react';
import './App.css';

import Map from "./components/Map/Map";
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [appState, setAppState] = useState({ showModal: true, geolocationPermission: false, userPermission: false });
  const success = () => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
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
  };

  const error = () => {
    // eslint-disable-next-line no-console
    console.error('Unable to retrieve location information!')
  };
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const hideModal = () => {
    setAppState({
      ...appState,
      showModal: false
    });
  };

  const handleLocationPermission = () => {
    setAppState({
      ...appState,
      userPermission: true
    });
    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  
  return (
    <div className="App">
      <Navbar />
      <Map userPermission={appState.userPermission} />
      <Modal
        show={appState.showModal}
        handleClose={hideModal}
        handleLocationPermission={handleLocationPermission}
      >
        <p>Please allow location to get utm zone of current location!</p>
      </Modal>

    </div>
  );
}

export default App;
