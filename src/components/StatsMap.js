import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function StatsMap(props) {
    const { countryData, selectedCountry } = props;
    const [coord, setCoord] = useState([20, 77])

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
            <Map center={coord} zoom={3} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </Map>
        </div>
    );
}