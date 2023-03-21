import { useState, useEffect } from 'react'
import SearchFilter from "./components/SearchFilter"
import axios from 'axios'
import CountriesList from './components/CountriesList'
import CountryInfo from './components/CountryInfo'

const baseUrl = 'https://restcountries.com/v3.1/all'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([countries])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const request = axios.get(baseUrl)
    request
      .then(response => response.data)
      .then(responseData => {
        setCountries(responseData)
      })
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    const PATTERN = event.target.value.toLowerCase()

    const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(PATTERN))

    setFilteredCountries(filtered)
  }

  const inRange = (num, min, max) => min < num && num < max

  const renderCountries = () => {
    if (inRange(filteredCountries.length, 1, 11)) return <CountriesList countries={filteredCountries} />
    else if (filteredCountries.length === 1 && filteredCountries[0].length !== 0) return <CountryInfo country={filteredCountries[0]} />
    else return <span>Too many matches</span>
  }

  return (
    <div>
      <span>find countries</span>
      <SearchFilter filter={filter} handleFilterChange={handleFilterChange} /><br />
      {renderCountries()}
    </div>
  );
}

export default App;