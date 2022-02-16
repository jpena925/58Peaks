import React, {useState, useEffect} from 'react'
import image from '../data/pngwing.com.png'



function Home({ randomPeaks }) {
  


  return (
    <section className='mountain-container'>
      <div id='random-container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>14er</th>
              <th>Elevation</th>
              <th>Class</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            {randomPeaks.map(peak => (
              <tr>
                <td><img key={peak.id} src={peak.image} alt={peak.name} className="table-image"/></td>
                <td>{peak.name}</td>
                <td>{peak.elevation.toString().slice(0,2) + ',' + peak.elevation.toString().slice(2,5) + "'"}</td>
                <td>{peak.class}</td>
                <td>{peak.range}</td>
              </tr>
            ))}
          </tbody>
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