import React, { useState } from 'react'
import { BiSort } from 'react-icons/bi';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Peaks from './Peaks';
import ReviewForm from './ReviewForm';

function PeakList({ allPeaks, setSortMtn, selectedPeak, setSelectedPeak }) {
const [selectedSort, setSelectedSort] = useState('')
const [completedHike, setCompletedHike] = useState(false)
const [route, setRoute] = useState('')
const [duration, setDuration] = useState('')
const [image, setImage] = useState('')
const [review, setReview] = useState('')

function displayClass() {
  if(selectedPeak.class === 1) {
    return " 1 – Hiking"
  } else if (selectedPeak.class === 2) {
    return " 2 – Scrambling"
  } else if (selectedPeak.class === 3) {
    return " 3 – Advanced Scrambling"
  } else {
    return " 4 – Simple Climbing"
  }
}

function handleNameClick(id) {
  allPeaks.filter(peak => {
    if(peak.id === id) {
      setSelectedPeak(peak)
      setCompletedHike(false)
    }
  })
}

function handleFormSubmit () {
  const newObj ={
    name: selectedPeak.name,
    elevation: selectedPeak.elevation,
    class: selectedPeak.class,
    range: selectedPeak.range,
    myTime: duration,
    myImage: image,
    myRoute: route,
    myComment: review,
    longitude: selectedPeak.longitude,
    latitude: selectedPeak.latitude
  }

  fetch('http://localhost:3002/peaks', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    setRoute('')
    setReview('')
    setImage('')
    setDuration('')
}

function sortPeaks(sortType) {
  if(sortType === '14er') {
    setSortMtn(sortMtn => [...sortMtn].sort(compare14er))
  } else if (sortType === 'Elevation') {
    setSortMtn(sortMtn => [...sortMtn].sort(compareElevation))
  } else if (sortType === 'Class') {
    setSortMtn(sortMtn => [...sortMtn].sort(compareClass))
  } else {
    setSortMtn(sortMtn => [...sortMtn].sort(compareRange))
  }
}

function sortPeaksName (e) {
  sortPeaks(e.target.innerText)
  setSelectedSort(e.target.innerText)
  console.log(selectedSort)
}

function compare14er(a, b) {
  if(a.name < b.name)
  return -1
  if(a.name > b.name)
  return 1
  return 0
}

function compareElevation (a, b) {
  if(a.elevation > b.elevation)
  return -1
  if(a.elevation < b.elevation)
  return 1
  return 0
}

function compareClass (a, b) {
  if(a.class < b.class)
  return -1
  if(a.class > b.class)
  return 1
  return 0
}

function compareRange (a, b) {
  if(a.range < b.range)
  return -1
  if(a.range > b.range)
  return 1
  return 0
}

  return (
  <section className='mountain-container-2'>
    <div id='all-peak-container'>
      <div className='head'>
        <table>
          <thead> 
            <tr>
              <th id='bi-sort'><BiSort /></th>
              <th onClick={sortPeaksName}>14er{selectedSort === '14er' ? <TiArrowSortedUp /> : null }</th>
              <th onClick={sortPeaksName}>Elevation{selectedSort === 'Elevation' ? <TiArrowSortedDown /> : null }</th>
              <th onClick={sortPeaksName} className="class-head">Class{selectedSort === 'Class' ? <TiArrowSortedUp /> : null }</th>
              <th onClick={sortPeaksName}>Range{selectedSort === 'Range' ? <TiArrowSortedUp /> : null }</th>
            </tr>
          </thead>
         </table>
        </div>
        <div className='body'>
          <table>
          <tbody>
            {allPeaks.map(peak => (
              <Peaks 
              name={peak.name} 
              image ={peak.image} 
              id={peak.id} 
              elevation={peak.elevation} 
              range={peak.range} 
              mntClass={peak.class}
              latitude={peak.latitude}
              longitude={peak.longitude}
              id={peak.id}
              handleNameClick={handleNameClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div id='selected-peak'>
      <h1>{selectedPeak.name}</h1>
      <img src={selectedPeak.mainImage} id='selected-image'/>
      <p className='main-text'><strong>Class:</strong> {displayClass()}</p>
      <p className='main-text'><strong>Range:</strong> {selectedPeak.range}</p>
      <p className='main-text'><strong>Elevation:</strong> {selectedPeak.elevation.toString().slice(0,2) + ',' + selectedPeak.elevation.toString().slice(2,5) + "'"}</p>
      <ReviewForm
      completedHike={completedHike}
      handleFormSubmit={handleFormSubmit}
      route={route}
      setRoute={setRoute}
      duration={duration}
      setDuration={setDuration}
      image={image}
      setImage={setImage}
      review={review}
      setReview={setReview}
      setCompletedHike={setCompletedHike}
      />
    </div>
  </section>
  )
}

export default PeakList