import MapBox from 'mapbox-gl'
import React, { useEffect, useRef } from 'react';
import "./map.scss";
import {MAPBOX_ACCESS_TOKEN} from '../../../helpers/envGetter'

const Map = () => {
  const mapContainer = useRef();
  useEffect(() => {
    MapBox.accessToken = MAPBOX_ACCESS_TOKEN
    const map = new MapBox.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/domnicamalan/ckkxdjzw50fzm17pp20s5z918',
      attributionControl: false
    });
  }, [])

  return (
    <div className="mapbox-container" ref={mapContainer}></div>
  )
}

export default Map