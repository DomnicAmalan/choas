import React from 'react';
import "./listsports.scss";
import {SearchBar, Logo} from '../../Components/atoms/index';
 

const ListSports = () => {
  return (
    <div className="analysis-container">
      <div className="sub-elements">
        <Logo />
        <div>
          <p>Popular games</p>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}

export default ListSports