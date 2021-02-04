import React, { useEffect } from 'react';
import "./listsports.scss";
import {SearchBar, Logo} from '../../Components/atoms/index';
import {allSports} from '../../API/decathalon'

const ListSports = () => {

  useEffect(() => {
    const data = async() => {
      const data = await allSports()
      console.log(data)
    }
    data()
  }, [])

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