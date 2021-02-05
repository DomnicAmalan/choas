import React, { useEffect, useState } from 'react';
import "./listsports.scss";
import {SearchBar, Logo, SVGViewer} from '../../Components/atoms/index';
import {SportsListItem} from '../../Components/molecules/index'
import {allSports} from '../../API/decathalon'

const ListSports = () => {
  const [sportsList, setSportsList] = useState([])

  useEffect(() => {
    initialData()
  }, [])

  const initialData = async() => {
    const data = await allSports();
    setSportsList(data)
  }

  return (
    <div className="analysis-container">
      <div className="sub-elements">
        <Logo />
        <SportsListItem data={sportsList} />
        <SearchBar />
      </div>
    </div>
  )
}

export default ListSports