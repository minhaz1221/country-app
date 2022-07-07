import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import EachCountrySearchbar from '../Component/EachCountrySearchbar';
import Map from '../Component/Map';
import "./eachCountry.css"

const EachCountry = () => {
    const location = useLocation();
    const {name,flags,capital,latlng, region, subregion, languages, currencies,cca3} = location.state;
  return (
    <div>
        <div className="single-country-container">
              <section className="left-section">
                <EachCountrySearchbar />
              </section>
              <section className="right-section">
                <section style={{display: "flex"}}>
                  <div className="inner-left-section">
                    <h1>{name.common}</h1>
                    <p>Official Name: { name.nativeName && Object.entries(name.nativeName)[0][1].official}</p>
                    <p>Language: { languages && Object.entries(languages)[0][1]}</p>
                    <p>Capital City: { capital && capital}</p>
                    <p>Currency: { currencies && Object.entries(currencies)[0][1].name} ({ currencies && Object.entries(currencies)[0][1].symbol})</p>
                    <h2>Region</h2>
                    <ul>
                      <li>Region: { region && region}</li>
                      <li>SubRegion: { subregion && subregion}</li>
                    </ul>
                    
                    <h2>DD Coordinates</h2>
                    <ul>
                      <li>Latitude: {latlng[0]}</li>
                      <li>Longitude: {latlng[1]}</li>
                    </ul>
                  </div>

                

                  <div className="inner-right-section">
                    <img className="single-country-flag" src={flags.png}/>
                  </div>
                </section>
                <Map name={{name, cca3}}/>
            </section>

          

      </div>
      <div className='btn_section'><NavLink className="home_button" to="/" >GO HOME</NavLink></div>
    </div>
    
  )
}

export default EachCountry