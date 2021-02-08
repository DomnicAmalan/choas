import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import "./globemap.scss";
import * as THREE from 'three'

const GlobeMap = () => {
  const globeEl = useRef();

      useEffect(() => {
        // custom globe material
        const globeMaterial = globeEl.current.globeMaterial();
        globeMaterial.bumpScale = 10;
        new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
          globeMaterial.specularMap = texture;
          globeMaterial.specular = new THREE.Color('grey');
          globeMaterial.shininess = 15;
        });

        setTimeout(() => { // wait for scene to be populated (asynchronously)
          const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
          directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
        });
      }, []);

 
  return (
    <div className="globe-wrapper">
       <Globe
        ref={globeEl}
        backgroundColor={"#bfb9f3"}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        animateIn={true}
       />
    </div>
   
  )
}

export default GlobeMap
