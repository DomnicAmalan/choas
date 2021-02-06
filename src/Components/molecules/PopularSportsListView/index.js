import React from 'react';
import { SVGViewer } from '../../atoms/index';
import './popularsportslist.scss';

const SportsListItem = ({ data }) => (
  <div className="popular-sports-list">
    {data.map((item, idx) => (
      <SVGViewer key={idx} attributes={item.attributes} />
    ))}
  </div>
);

export default SportsListItem;
