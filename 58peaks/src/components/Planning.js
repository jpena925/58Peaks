import React, { useState, useEffect } from "react";
import PlanningForm from "./PlanningForm";
import PackingList from "./PackingList";

function Planning({allPeaks}) {
	const [formData, setFormData] = useState("");
    const [packingList, setPackingList] = useState([])
	const [currentWeather, setCurrentWeather] = useState(null)
	const [selectedMountain, setSlectedMountain] = useState({
		id: 1,
        name: "Mt. Elbert",
        elevation: 14433,
        class: 1,
        range: "Sawatch Range",
        image: "https://www.14ers.com/images/pthumbs/10001.jpg",
        mainImage: "https://www.14ers.com/photos/mtelbert/peakphotos/medium/200506_Elbert02.jpg?lu=20210623",
        latitude: 39.1178,
        longitude: -106.4452
	})
	const weatherKey = process.env.REACT_APP_WEATHER_KEY

	function handleSelectedMountain(e, name) {
		e.preventDefault()
		allPeaks.map(peak => {
			if(peak.name === name) {
				setSlectedMountain(peak)
			} else { 
				return null
			}
		})
	}

	function handleAddPackingItem(e, item) {
    e.preventDefault()
		setPackingList([...packingList, item])
	}

	useEffect(() => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${selectedMountain.latitude},${selectedMountain.longitude}&aqi=no`)
		.then(res => res.json())
		.then(data => {
			const newObj = data.current
			setCurrentWeather(newObj)
		})	
	}, [currentWeather])

	

	const weather = currentWeather ? 
	<div className="weather">
		<h1>Current weather near {selectedMountain.name}</h1>
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
			<div id="plan-hike-split">
				<div className="mountain-select">
					<form id="mountain-form" onSubmit={(e) => handleSelectedMountain(e, e.target.querySelector('input').value)}>
						<label>Select a mountain:</label><br />
						<input type='text' list='mountains' />
						<datalist id="mountains">
							{allPeaks.map(peak => (
								<option value={peak.name} id={peak.id}>{peak.name}</option>
							))}
						</datalist>
						<input class="submitButton" type="submit" name="SUBMITBUTTON" value="Submit" />
					</form>
				</div>
			</div>

			<PlanningForm
				formData={formData}
				setFormData={setFormData}
				onAddPackingItem={handleAddPackingItem}
			/>
			<PackingList packingList={packingList} />
		</div>
		</section>
	);
}

export default Planning;
