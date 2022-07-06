import React, { useEffect, useState } from 'react'

import Countries from '../Component/Countries';
import Search from '../Component/Search';
import UseFectch from '../Component/UseFetch';

const Home = () => {
  const {countries, isLoading, error} = UseFectch("https://restcountries.com/v3.1/all")

  const [filterdCountries, setFilterdCountries] = useState([]);

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const filteredCountry = countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      return name.includes(value);
    });

    setFilterdCountries(filteredCountry);
  };

  useEffect(() => {
    setFilterdCountries([...countries]);
  }, [isLoading])

  return (
    <div>
      <div>
          <h1 style={{textAlign: 'center'}}>Country App</h1>
      </div>
      <div>
          <Search searchValue={handleSearch} />
      </div>
      {
        isLoading && <h2 style={{display: "flex", justifyContent:"center", alignItems: "center"}}>Country is Loading...</h2>
      }
      {
        error && <h2 style={{display: "flex", justifyContent:"center", alignItems: "center"}}>There are some problem with Your API. Please Contact with you API provider</h2>
      }
      {
        countries && <Countries countires={filterdCountries}/>
      }
    </div>
  )
}

export default Home