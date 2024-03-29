/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import Tooltip from '../Tooltip/Tooltip';
import { findUTMZone } from '../../utils/mapUtils';
import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3plcm9yaHVuIiwiYSI6ImNqYmF4NHh2dTEwbTAycHAzbnd4azhwcGEifQ.LsST6QrnJ0XEar6wgnnfSg';

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = { lat: 40.70048, lng: -101.92426 }
    this.map = {};
    this.tooltipContainer = "";
  };

  componentDidMount() {
    this.initMap();

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userPermission !== this.state.userPermission) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo.bind(this));
    }
  };

  setTooltip(features,coordinates) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          Tooltip, {
          features,
          coordinates
        }
        ),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = '';
    }
  };

  static getDerivedStateFromProps(nextProps) {
    const { userPermission } = nextProps
    if (userPermission === true) {
      return { userPermission } 
    }
    return null;
  }


  flyTo() {
    const { lat, lng } = this.state
    const zone = findUTMZone(lng, lat)
    const popup = new mapboxgl.Popup({ offset: 35, isOpen: true })
      .setHTML(`longitude: ${lng} <br> latitude: ${lat} <br> zone: ${zone} `);

    this.map.flyTo({ center: [lng, lat], zoom: 3 })

    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.map)
      .togglePopup()
  }

  displayLocationInfo(position) {
    const { coords: { longitude, latitude } } = position
    const state = { lat: latitude, lng: longitude }
    this.setState(state, () => {
      this.flyTo()
    })
  }

  initMap() {
    this.tooltipContainer = document.createElement('div');
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/ozerorhun/ck3vklnqx0twp1clkqz3jy3lf',
      center: [41.01513, 28.979530],
      zoom: 3,
    });
    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-60, 0]
    }).setLngLat([0, 0]).addTo(this.map);
    this.map.on('click', (e) => {
      const features = this.map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      this.setTooltip(features, e.lngLat);
    });
  }

  render() {
    return (
      <div>
        <div ref={el => { this.mapContainer = el }} className="map-container" />
      </div>);
  }
}

export default Map;




