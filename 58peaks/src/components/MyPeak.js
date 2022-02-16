import React from 'react'

function MyPeak({ name, elevation, mtnClass, range, myTime, myImage, myRoute, comment }) {
  return (
    <li className='peak-item'>
        <div className='my-peak'>
            <h1>{name}</h1>
            <img src={myImage} className='my-image'/>
            <p className='main-text'><strong>Class:</strong> {mtnClass}</p>
            <p className='main-text'><strong>Range:</strong> {range}</p>
            <p className='main-text'><strong>Elevation:</strong> {elevation.toString().slice(0,2) + ',' + elevation.toString().slice(2,5) + "'"}</p>
            <p className='main-text'><strong>Route:</strong> {myRoute}</p>
            <p className='main-text'><strong>Time:</strong> {myTime}</p>
            <p className='main-text'><strong>Review:</strong> {comment}</p>
        </div>
    </li>
  )
}

export default MyPeak