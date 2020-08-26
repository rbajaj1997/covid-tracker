import React, { useEffect, useState, Fragment } from 'react';
import 'react-tabs/style/react-tabs.css';
import './App.scss';
import axios from 'axios';
import Loader from './components/Loader';
import Header from './components/Header';
import Stats from './components/Stats';
import Table from './components/Table';
import StatsMap from './components/StatsMap';
import Info from './components/Info';
import Footer from './components/Footer';
import Snackbar from './components/Snackbar';
import A2HS from './components/A2HS';

export default function App(props) {
	const [globalData, setGlobalData] = useState({});
	const [countryData, setCountryData] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(-1);
	const [type, setType] = useState("NEW");
	const [loading, setLoading] = useState(true);
	const [deferredPrompt, setDeferredPrompt] = useState(null);

	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);
	}

	//*** Code for Install Prompt */ 
	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
		console.log('Before Install Prompt fired!');
		setDeferredPrompt(e);
		return false;
	});

	const onButtonClick = () => {
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choice) => {
			if(choice.outcome === 'dismissed'){
				console.log('Declined!!');
			}else{
				setDeferredPrompt(null);
			}
		})
	}

	const handleTypeChange = (change) => {
		setType(change);
	}

	useEffect(() => {
		const headers = {
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/json'
		};

		const req1 = axios.get(`https://disease.sh/v3/covid-19/all`, { headers });
		const req2 = axios.get(`https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true`, { headers });

		Promise.all([req1, req2]).then((values) => {
			setGlobalData(values[0].data);
			setCountryData(values[1].data);
			setLoading(false);
		}).catch((err) => {
			setLoading(false);
			alert("Error while fetching data!");
		})
	}, [])

	return (
		<div className={`app ${loading ? '' : 'fadeIn-animation'}`}>
			{loading ? <Loader loading={loading} /> : <Fragment>
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

				{(!deferredPrompt || !navigator.onLine) ? null: <A2HS type={type} handleButtonClick={onButtonClick} />}


				<StatsMap
					countryData={countryData}
					selectedCountry={selectedCountry}
					type={type}
				/>

				<Info />

				{navigator.onLine ? null : <Snackbar message="Application offline!" time={8000} />}

				<Footer />
			</Fragment>}
		</div>
	);
}