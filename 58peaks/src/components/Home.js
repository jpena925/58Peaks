import React, {useState, useEffect} from 'react'
import image from '../data/pngwing.com.png'



function Home() {
  const [peaks, setPeaks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/peaks')
    .then(res => res.json())
    .then(data => setPeaks(data.sort(() => Math.random() - Math.random()).splice(0, 10)))
  }, [])


  return (
    <section className='mountain-container'>
      <div id='random-container'>
        <table>
          <tr>
            <th></th>
            <th>14er</th>
            <th>Elevation</th>
            <th>Class</th>
            <th>Range</th>
          </tr>
          {peaks.map(peak => (
            <tr>
              <td><img src={peak.image} alt={peak.name} className="table-image"/></td>
              <td>{peak.name}</td>
              <td>{peak.elevation.toString().slice(0,2) + ',' + peak.elevation.toString().slice(2,5) + "'"}</td>
              <td>{peak.class}</td>
              <td>{peak.range}</td>
            </tr>
          ))}
        </table>
        
      </div>
      {/* <div>
        <img src={image} alt='ram' className='home-column' />
      </div> */}
      {/* <div>
        <img src={image2} alt='ram' className='home-column-2'/>
      </div> */}
    </section>
  )
}

export default Home