import React, {useState, useEffect} from 'react'
import Map from './Map'
import MyPeak from './MyPeak'
import instaPic from '../data/5a4e42e52da5ad73df7efe79.png'

function MyPeakList() {
const [myPeaks, setMyPeaks] = useState([])
const [insta, setInsta] = useState([])

const instaKey = process.env.REACT_APP_INSTAGRAM_KEY

useEffect(() => {
  fetch('http://localhost:3002/peaks')
  .then(res => res.json())
  .then(data => setMyPeaks(data))
}, [])

useEffect(() => {
  fetch(`https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${instaKey}`)
  .then(res => res.json())
  .then(data => setInsta(data.data.slice(0,6)))
}, [])

  return (
    <>
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
      <Map myPeaks={myPeaks}/>
      </div>
      <section id='insta-container'>
        <div id='instagram'>
            <div>
                <a href='https://www.instagram.com/58peaks/?hl=en' target="_blank">
                <img id='insta-icon' src={instaPic} alt='icon' />
                </a>
                <p id='insta-text'>Follow 58Peaks on Instagram!</p>
            </div>
            <div>
                {insta.map(photo => (
                    <img key={photo.id} className='insta-photos' src={photo.media_url} alt={photo.id}/>
                ))}
            </div>
            </div>
        </section>
        </>
  )
}

export default MyPeakList