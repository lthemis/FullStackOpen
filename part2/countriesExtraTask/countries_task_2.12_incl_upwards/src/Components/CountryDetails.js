import {React, useEffect, useState} from "react";
import axios from 'axios'

const CountryDetails = ({country}) => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        const params = {
          access_key: '00ecaaeb452a44d7943123751221101',
          query: country.capital
        }
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${params.access_key}&q=${params.query}&aqi=no`)
      .then(response => {
        const data = response.data.current;
        console.log(response.data.current.temp_c)
        console.log(response.data.current.condition['icon'])
        console.log(response.data.current.wind_kph)
        setWeatherData([data.temp_c, data.condition['icon'], data.wind_kph])
      })
    })
    console.log(weatherData);

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => {
            return <li key={country.ccn3}>{language}</li>;
          })}
        </ul>
        <img src={country.flags.png}></img>
        <h1>Weather</h1> 
        <p>Temperature: {weatherData[0]}</p>
        <img src={weatherData[1]}></img>
        <p>Weather: {weatherData[2]}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
