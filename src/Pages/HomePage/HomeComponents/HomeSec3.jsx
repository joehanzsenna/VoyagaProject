import React, {useState} from 'react'
import { ToursDb } from './HomeIndexDB'


const HomeSec3 = () => {
  const [place] = useState(ToursDb)

  return (
    <div className='HomeSec3'>
        <div className='HomeSec3Contents'>
                <div className='HomeSec3ContentsText'>
                    <h2 className='header--2 '>Discover Top Tours Of 2023</h2>
                </div>
            <div className='HomeSec3ContentsInner'>
              {place.map((ToursDb)=>{
                const {id, image, place, location, price} = ToursDb
                return(
                  <div key={id} className='HomeSec3ContentsInnerFrame'>
                    <img src={image} alt="" className='HomeSec3ContentsInnerImg'/>
                    <h4 className='HomeSec3ContentsInnerPlace'>{place}</h4>
                    <h5 className='HomeSec3ContentsInnerLocation'>{location}</h5>
                    <div className='innerFlex'>
                      <h5 className='HomeSec3ContentsInnerPrice'>N{price} <span style={{color:'#98A2B3'}}>/Visit</span></h5>
                      <button className='btn--Tours'>Buy Now</button>
                    </div>

                  </div>
                )
              })}
                
            </div>
        </div>
    </div>
  )
}

export default HomeSec3