import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import PeakList from './PeakList'
import MyPeakList from './MyPeakList'
import Planning from './Planning'
import Home from './Home'
import './App.css'


function App() {
  const [randomPeaks, setRandomPeaks] = useState([])
  const [allPeaks, setAllPeaks] = useState([])
  const [sortMtn, setSortMtn] = useState([])
  const [selectedPeak, setSelectedPeak] = useState({
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
  

  useEffect(() => {
    fetch('http://localhost:3001/peaks')
    .then(res => res.json())
    .then(data => { 
      setAllPeaks(data)
      setSortMtn(data)
      setRandomPeaks(randomPeaks => [...data].sort(() => Math.random() - Math.random()).splice(0, 10))
    })
  }, [])

	return (
		<div>
			<Header />
			<Switch>
				<Route path="/peaklist">
					<PeakList allPeaks={sortMtn} setSortMtn={setSortMtn} selectedPeak={selectedPeak} setSelectedPeak={setSelectedPeak} />
				</Route>
				<Route path="/mypeaks">
					<MyPeakList />
				</Route>
				<Route path="/planmyhike">
					<Planning allPeaks={allPeaks} />
				</Route>
				<Route exact path="/">
					<Home randomPeaks={randomPeaks} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
