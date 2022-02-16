import React, {useState, useEffect} from 'react'
import Map from './Map'
import MyPeak from './MyPeak'

function MyPeakList() {
const [myPeaks, setMyPeaks] = useState([])

useEffect(() => {
  fetch('http://localhost:3002/peaks')
  .then(res => res.json())
  .then(data => setMyPeaks(data))
}, [])

  return (
    <div id='my-peaks-container'>
      <ul className='my-peaks'>
        {myPeaks.map(peak => (
          <MyPeak 
          name={peak.name}
          elevation={peak.elevation}
          mtnClass={peak.class}
          range={peak.range}
          myTime={peak.myTime}
          myImage={peak.myImage}
          myRoute={peak.myRoute}
          comment={peak.myComment}
          />
        ))}
      </ul>
      <Map />
    </div>
  )
}

export default MyPeakList