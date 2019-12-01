import React, {Component} from 'react';
import mapboxgl from '../../../node_modules/mapbox-gl/dist/mapbox-gl-dev';

import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3plcm9yaHVuIiwiYSI6ImNqYmF4NHh2dTEwbTAycHAzbnd4azhwcGEifQ.LsST6QrnJ0XEar6wgnnfSg';

class Map extends Component {
  state = {}

  componentDidMount() {
    // const { teams } = this.props;
    this.initMap();
  }

  initMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/ozerorhun/cjtgaw1z9533w1flx27dmc595',
      center: [-101.92426, 40.70048],
      zoom: 3,
      pitch: 50,
      bearing: 27
    });
    // this.drawMarkers(teams);
  }

  render() {
    return (<div ref={el => { this.mapContainer = el }} className="map-container" />);
  }
}

export default Map;




