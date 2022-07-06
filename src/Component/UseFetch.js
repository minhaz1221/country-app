import React, { useEffect, useState } from 'react'

const UseFectch = (url) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
    
          setCountries(data);
          setIsLoading(false);
          setError(null);
        } catch (err) {
          setIsLoading(false)
          setError(err);
          console.log(err);
        }
      }
    
      useEffect(() => {
        fetchData(url)
      },[url])
  
      return {countries, isLoading, error}
}

export default UseFectch