const CountryInfo = ({ country }) => {
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
            <img src={country.flags.png} alt={country.flags.src}></img>
        </div>
    );
}

export default CountryInfo;