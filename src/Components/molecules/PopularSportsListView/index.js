import React, { useEffect, useState } from 'react';
import { SVGViewer } from '../../atoms/index';
import './popularsportslist.scss';

const SportsListItem = ({ data }) => (
  <div className="popular-sports-list">
    {data.map((item) => (
      // item.attributes.icon?
      <SVGViewer attributes={item.attributes} />
      // : null
    ))}
  </div>
);

export default SportsListItem;
