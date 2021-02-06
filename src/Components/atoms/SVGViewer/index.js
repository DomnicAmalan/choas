import React from 'react';
import './svgviewer.scss';
import { getRandom } from '../../helpers/filterColorGen';

const SVGViewer = ({ attributes }) => {
  console.log('YYY');
  const filters = getRandom('color');
  return (
    <div className="svg-wrapper">
      <img style={{ filter: attributes.icon ? filters.filter : null }} src={attributes.icon ? attributes.icon : 'https://icons8.com/icon/M1G5XzZ8n9ks/basketball-jersey'} className="svg-view" alt="No Icon" />
      <div className="svg-text-wrapper">
        <p className="svg-text">{attributes.name}</p>
      </div>

    </div>

  );
};

export default SVGViewer;
