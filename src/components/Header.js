import React from 'react'
import logo from '../img/virus.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header__text">
                <img src={logo} alt="Virus Logo" className="header__logo" />
                <span className="header__text--title">COVID-19 Tracker</span>
            </div>
            <div className="header__select">
                <select name="cars" className="header__select--input">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="audi">Holaa & Amigos Fiends</option>
                    <option value="audi">Holaa & Amigos Fiendsvdvjsckjndkvkwnvehhvererhveivie</option>
                </select>
            </div>
        </div>
    );
}