import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import style from './country.module.css'

const Country = (props) => {
    const {name,flags,capital,area,latlng, region, subregion, languages, currencies} = props.country


  return (
    <div>
        <section className={style["single-country"]}>
          <div className={style["img-container"]}>
            <img className={style.image} alt="Country Flag" src={flags.png}></img>
          </div>
          <p className={style.text}><b>Name:</b> {name.common}</p>
          <p className={style.text}><b>Capital:</b> {capital}</p>
          <p className={style.text}><b>Area:</b> {area} sq.km</p>
          <div className={style['btn-container']}>
              <Link  className="btn" to={name.common} state={{name, flags,capital,area,latlng, region, subregion, languages, currencies}}>Details</Link>
          </div>
        </section>
    </div>
  )
}

export default Country