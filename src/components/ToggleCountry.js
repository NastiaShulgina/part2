import { useState } from "react";
import CountryInfo from './CountryInfo'

const ToggleCountry = ({ country }) => {
    const [toggleCountryInfo, setToggleCountryInfo] = useState("show")
    const [showCountryInfo, setShowCountryInfo] = useState(false)

    const handleToggle = () => {
        setToggleCountryInfo(toggleCountryInfo === "show" ? "hide" : "show")
        setShowCountryInfo(!showCountryInfo)
    }
    
    return (
        <div>
            <button onClick={() => handleToggle()}>{toggleCountryInfo}</button>
            {showCountryInfo && <CountryInfo country={country} />}
        </div>
    );
}

export default ToggleCountry;