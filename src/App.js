import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import axios from 'axios';
import Header from './components/Header';
import Stats from './components/Stats';
import Table from './components/Table';
import StatsMap from './components/StatsMap';
import Info from './components/Info';
import Footer from './components/Footer';

export default function App() {
	const [globalData, setGlobalData] = useState({});
	const [countryData, setCountryData] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(-1);
	const [type, setType] = useState("NEW");

	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);
	}

	const handleTypeChange = (change) => {
		setType(change);
	}

	useEffect(() => {
		const req1 = axios.get(`https://disease.sh/v3/covid-19/all?timestamp=${new Date().getTime()}`);
		const req2 = axios.get(`https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true&timestamp=${new Date().getTime()}`);

		Promise.all([req1, req2]).then((values) => {
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
			<Stats
				globalData={globalData}
				countryData={countryData}
				selectedCountry={selectedCountry}
				type={type}
				handleTypeChange={handleTypeChange}
			/>
			<Table
				countryData={countryData}
			/>

			<StatsMap
				countryData={countryData}
				selectedCountry={selectedCountry}
				type={type}
			/>

			<Info />

			<Footer />

		</div>
	);
}