import React from 'react'


import Country from './Country'
import style from './countries.module.css'


const Countries = (props) => {
  return (
    <div>
        <section className={style["country-section"]}>
          {
              props.countires.map((country) =>{
                    return <Country country={country} key={country.name.common}/>
              })
          }
        </section>
    </div>
  )
}

export default Countries