import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Popup, CircleMarker } from 'react-leaflet'
import numeral from "numeral"
import 'leaflet/dist/leaflet.css';

export default function StatsMap(props) {
    const { countryData, selectedCountry, type } = props;
    const [coord, setCoord] = useState([20, 77]);
    let color, multiplier, caseType;

    switch (type) {
        case "NEW":
            color = "#F1A139";
            multiplier = 0.05;
            caseType = "cases";
            break;
        case "RECOV":
            color = "#7dd71d";
            multiplier = 0.06;
            caseType = "recovered";
            break;
        case "DEATH":
            color = "#F23A3A";
            multiplier = 0.2;
            caseType = "deaths";
            break;
        default:
            break;
    }

    useEffect(() => {
        if (Number(selectedCountry) === -1) {
            setCoord([20, 77]);
        } else {
            for (let i = 0; i < countryData.length; i++) {
                if (countryData[i].countryInfo._id === Number(selectedCountry)) {
                    setCoord([countryData[i].countryInfo.lat, countryData[i].countryInfo.long]);
                    break;
                }
            }
        }
    }, [countryData, selectedCountry])

    return (
        <div className="map">
            <Map center={coord} zoom={2.5} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    target="_blank"
                    attribution="&copy; <a target='_blank' href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                    countryData.map((country) => {
                        if (country.countryInfo._id) {
                            return <CircleMarker
                                center={[country.countryInfo.lat, country.countryInfo.long]}
                                color={color}
                                radius={Math.sqrt(country[caseType]) * multiplier}
                                key={country.countryInfo._id}
                                fillOpacity={0.4}
                                onMouseOver={(e) => { e.target.openPopup() }}
                                onMouseOut={(e) => { e.target.closePopup() }}
                            >
                                <Popup>
                                    <h2 style={{ textAlign: "center" }}>
                                        {country.country}
                                    </h2>
                                    <br />
                                    <div>
                                        <strong>Cases: </strong>{numeral(country.cases).format()}
                                    </div>
                                    <div>
                                        <strong>Recovered: </strong> {numeral(country.recovered).format()}
                                    </div>
                                    <div>
                                        <strong>Deaths: </strong> {numeral(country.deaths).format()}
                                    </div>
                                </Popup>
                            </CircleMarker>
                        } else {
                            return false;
                        }
                    })
                }
            </Map>
        </div>
    );
}