import React, { useState, useEffect } from 'react';
import './App.css';

import Map from '../src/components/Map/Map';
import Modal from '../src/components/Modal/Modal';
import Navbar from '../src/components/Navbar/Navbar';


function App() {
  let [appState, setAppState] = useState({ showModal: true, geolocationPermission: false });
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const success = () => {
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
    };
    const error = () => {

    };

    navigator.geolocation.getCurrentPosition(success, error, options);


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
          <p>Devam etmek için konum bilgisine izin ver butonuna tıklayınız !</p>
        </Modal>
      }
    </div>
  );
}

export default App;
