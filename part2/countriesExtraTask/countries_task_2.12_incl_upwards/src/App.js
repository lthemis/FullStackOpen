import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Country from './Components/Country'

function App() {

const [filterVal, setFilter] = useState('')
const [filteredCountries, setCountry] = useState([])

const inputHandler = (e) => {
  setFilter(e.target.value)
}

const hook = () => {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      const countries = response.data.filter(country => country.name.common.toLowerCase().match(`^${filterVal.toLowerCase()}`))
      setCountry(countries)
    })
}

useEffect(hook,[filterVal])

const changeCountryBtnHandler = (val) => {
  setCountry(val)
  let input = document.getElementById('input')
  input.value = val[0].name.common
}

  return (
    <div className="App">
      <p> Find countries <input id={'input'} onChange={inputHandler}/></p>
      <Country countries={filteredCountries} setCountry={changeCountryBtnHandler}/>
    </div>
  );
}

export default App;
