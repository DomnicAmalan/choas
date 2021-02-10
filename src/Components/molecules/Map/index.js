import MapBox from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react';
import "./map.scss";
import {MAPBOX_ACCESS_TOKEN} from '../../../helpers/envGetter'

const Map = () => {
  const mapContainer = useRef();
  
  const [currentLoc, setCurrentLoc] = useState({
    latitude: 50.5,
    longitude: 30.5
  })

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
    var markerHeight = 50, markerRadius = 10, linearOffset = 25;
    var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };

    // var popup = new MapBox.Popup({offset: popupOffsets, className: 'my-class'})
    // .setLngLat([30.5, 50.5])
    // .setHTML("<h1>Hello World!</h1>")
    // .setMaxWidth("300px")
    // .addTo(map);

    // const geoLocateUser = new MapBox.GeolocateControl({
    //   positionOptions: {
    //     enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    // });
    // // map.addControl(marker)
    // map.addControl(geoLocateUser);
    // map.on('load', function() {
    //   const dtata = geoLocateUser.trigger();
    // });
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