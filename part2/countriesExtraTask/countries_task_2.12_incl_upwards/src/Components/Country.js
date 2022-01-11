import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails';

const Country = ({countries, setCountry}) => {
  const btnClickHandler = (key) => {
    setCountry(countries.filter(country => country.ccn3 === key))
  }

 
  return (
    <div>
      {countries.map( country => {
        if (countries.length === 1) {
          return <CountryDetails country={country}/>
        }
        return <h1 key={country.ccn3}>{country.name.common}<button onClick={() => btnClickHandler(country.ccn3)}>Show</button></h1>
      })}
    </div>
  );
};

export default Country;