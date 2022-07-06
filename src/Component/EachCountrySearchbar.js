import React, { useState, useEffect } from 'react'
import UseFectch from './UseFetch';
import "../Pages/eachCountry.css"
import {SearchNav, SearchInput, SearchResult, BarIcon, TimesIcon} from './Style-components/header.style'
import { NavLink } from 'react-router-dom';


const EachCountrySearchbar = () => {
  const {countries, isLoading, error} = UseFectch("https://restcountries.com/v3.1/all");
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [isNavbarOpend, setIsNavbarOpend] = useState(false);

  const handleSearch = (e) =>{
    var value = e.target.value.toLowerCase();
    const filteredCountry = countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      return name.includes(value)
    })

    setFilterdCountries(filteredCountry)
  }

  useEffect(() => {
    setFilterdCountries([...countries])
    
  }, [isLoading])
  
  return (
    <div>
        <BarIcon onClick={() => setIsNavbarOpend(true)} isNavbarOpend={isNavbarOpend} />
        <SearchNav isNavbarOpend={isNavbarOpend}>
        <TimesIcon onClick={() => setIsNavbarOpend(false)} isNavbarOpend={isNavbarOpend} />
            <SearchInput type="search" onChange={handleSearch} placeholder="You can also search here..."></SearchInput>
            <SearchResult>
                {
                  isLoading && <h3>Country is loading...</h3>
                }
                {
                  error && <h3>API can't Fetch successfully</h3>
                }
                <ul>{
                    countries && filterdCountries.map((country) => {
                      const {name,flags,capital,area,latlng, region, subregion, languages, currencies} = country
                        return (
                          <NavLink onClick={() => setIsNavbarOpend(false)} to={name.common} state={{name,flags,capital,area,latlng, region, subregion, languages, currencies}}>{country.name.common}</NavLink>
                    )
                    })
                  }
                </ul>
            </SearchResult>
        </SearchNav>
    </div>
  )
}

export default EachCountrySearchbar