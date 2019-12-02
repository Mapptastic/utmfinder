import React, { Component } from 'react';
import mapboxgl from '../../../node_modules/mapbox-gl/dist/mapbox-gl-dev';


import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3plcm9yaHVuIiwiYSI6ImNqYmF4NHh2dTEwbTAycHAzbnd4azhwcGEifQ.LsST6QrnJ0XEar6wgnnfSg';

class Map extends Component {
  constructor() {
    super()
    this.state = { lat: -101.92426, lng: 40.70048 }
    this.map = {};

  }

  // map object to share


  componentDidMount() {
    // const { teams } = this.props;
    this.initMap();
    
  }

  displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(`longitude: ${lng} | latitude: ${lat}`);
    this.map.flyTo({ center: [lng, lat], zoom: 12 })
    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.map);
  }


  initMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/ozerorhun/cjtgahlop0njy1gpxpntt9ej5',
      center: [41.01513, 28.979530],
      zoom: 3,
      pitch: 50,
      bearing: 27
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo.bind(this));
    }
    // this.drawMarkers(teams);
  }

  render() {
    return (<div>
      {/* <code>
        latitude: {latitude}<br />
        longitude: {longitude}<br />
        timestamp: {timestamp}<br />
        accuracy: {accuracy && `${accuracy}m`}<br />
        error: {error}
      </code> */}
      <div ref={el => { this.mapContainer = el }} className="map-container" />
    </div>);
  }
}

export default Map;




