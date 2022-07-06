import React, { useState } from 'react'

import style from './search.module.css'

const Search = (props) => {

  const handleChange = (e) => {
    props.searchValue(e.target.value);
  }

  return (
    <div style={{textAlign : 'center', margin: '50px 0'}}>
        <input onChange={handleChange} className={style.inpt} type="search" placeholder="Search Country..."></input>
    </div>
  )
}

export default Search