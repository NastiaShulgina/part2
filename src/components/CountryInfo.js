import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => {

    const [weather, setWeather] = useState({})

    const apiKey = process.env.REACT_APP_API_KEY

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}&units=metric`

    useEffect(() => {
        const request = axios.get(weatherUrl)
        request
            .then(response => response.data)
            .then(responseData => {
                setWeather({
                    temperature: responseData.main.temp,
                    iconSrc: `https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`,
                    iconAlt: responseData.weather[0].description,
                    windSpeed: responseData.wind.speed
                })
            })
    }, [weatherUrl])

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div><br />
            <div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(lang => {
                        return <li key={lang}>{lang}</li>
                    })}
                </ul>
            </div>
            <img src={country.flags.png} alt={country.flags.src} className='flag' />
            <div>temperature {weather.temperature} Celcius</div>
            <img src={weather.iconSrc} alt={weather.iconAlt} />
            <div>wind {weather.windSpeed} m/s</div><br />
        </div>
    );
}

export default CountryInfo;