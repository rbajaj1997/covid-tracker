import React from 'react'
import logo from '../img/virus.svg'

export default function Header(props) {
    const { countryData, selectedCountry, handleCountryChange } = props;

    return (
        <div className="header">
            <div className="header__text">
                <img src={logo} alt="Virus Logo" className="header__logo" />
                <span className="header__text--title">COVID-19 Tracker</span>
            </div>
            <div className="header__select">
                <select
                    name="country-list"
                    className="header__select--input"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option key="-1" value="-1">Worldwide</option>
                    {countryData.map(country => {
                        if (!country.countryInfo._id) {
                            return false;
                        }
                        return (
                            <option
                                key={country.countryInfo._id}
                                value={country.countryInfo._id} >
                                {country.country}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}