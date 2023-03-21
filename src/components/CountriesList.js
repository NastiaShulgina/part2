import ToggleCountry from "./ToggleCountry";

const CountriesList = ({ countries }) => {
    return (
        <ul>
            {countries.map(country => {
                const name = country.name.common
                return (
                    <div key={name}>
                        <li>{name}</li>
                        <ToggleCountry country={country} />
                    </div>
                )
            })}
        </ul>
    );
}

export default CountriesList;