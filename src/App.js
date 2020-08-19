import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './components/Header';

export default function App() {
	const [globalData, setGlobalData] = useState({});
	const [countryData, setCountryData] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(-1);

	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);
	}

	useEffect(() => {
		const req1 = axios.get('https://disease.sh/v3/covid-19/all');
		const req2 = axios.get('https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true');

		Promise.all([req1, req2]).then((values) => {
			console.log("Promise Resolved!");
			setGlobalData(values[0].data);
			setCountryData(values[1].data);
		});
	}, [])

	return (
		<div className="app">
			<Header
				countryData={countryData}
				selectedCountry={selectedCountry}
				handleCountryChange={handleCountryChange}
			/>
		</div>
	);
}