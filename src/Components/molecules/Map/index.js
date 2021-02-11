import MapBox from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react';
import "./map.scss";
import {MAPBOX_ACCESS_TOKEN} from '../../../helpers/envGetter'
import {useTranslation}  from 'react-i18next';

const Map = () => {
  const mapContainer = useRef();
  const [currentLoc, setCurrentLoc] = useState({
    latitude: 50.5,
    longitude: 30.5
  })
  const {t, i18n} = useTranslation();
  console.log(t, i18n.language)
  useEffect(() => {
    MapBox.accessToken = MAPBOX_ACCESS_TOKEN
    // getCurrentLoc()
    const map = new MapBox.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/domnicamalan/ckkxdjzw50fzm17pp20s5z918',
      attributionControl: false,
      center: {lng: currentLoc.longitude, lat: currentLoc.longitude},
      // pitch: 60,
      // bearing: -60,
      zoom: 10,
      animate: true,
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });
  }, [])

  // const getCurrentLoc = async() => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     let {latitude, longitude} = position.coords
  //     setCurrentLoc({...currentLoc, latitude: latitude, longitude: longitude} )
  //   })
  // }
  

  return (
    <div className="mapbox-container" ref={mapContainer}></div>
  )
}

export default Map