import React, { useState, useEffect } from "react";
import PlanningForm from "./PlanningForm";
import PackingList from "./PackingList";

function Planning() {
	const [formData, setFormData] = useState("");
    const [packingList, setPackingList] = useState([])
	const [currentWeather, setCurrentWeather] = useState(null)

	const weatherKey = process.env.REACT_APP_WEATHER_KEY



	function handleAddPackingItem(e, item) {
    e.preventDefault()
		setPackingList([...packingList, item])
	}

	useEffect(() => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=39.1503,-107.0831&aqi=no`)
		.then(res => res.json())
		.then(data => {
			const newObj = data.current
			setCurrentWeather(newObj)
		})
	}, [])

	const weather = currentWeather ? 
	<div className="weather">
		<h1>Current weather near Mt. Bross</h1>
		<p><strong>Condition:</strong> {currentWeather.condition.text}<img src={currentWeather.condition.icon} id='weather-icon' /></p>
		<p><strong>Tempeture:</strong> {currentWeather.temp_f}°</p>
		<p><strong>Feels like:</strong> {currentWeather.feelslike_f}°</p>
		<p><strong>Wind:</strong> {currentWeather.wind_mph}mph</p>
		<p><strong>Wind Direction:</strong> {currentWeather.wind_dir}</p>
	</div>
	: null


	return (
		<section id="planning-container">
		<div>
			{weather}
			<PlanningForm
				formData={formData}
				setFormData={setFormData}
				onAddPackingItem={handleAddPackingItem}
			/>
			<PackingList packingList={packingList} />
		</div>
		<p>hello</p>
		</section>
	);
}

export default Planning;
