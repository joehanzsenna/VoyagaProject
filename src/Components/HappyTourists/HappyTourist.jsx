import React from 'react'
import './HappyTourist.scss'
import TouristImg01 from '../../Assets/ComponentsAssets/HappyTouristImg.png'

const HappyTourist = () => {
  return (
    <div className='HappyTourist'>
        <div className='HappyTouristContents'>
            <div className='HappyTouristContents--1'>
                <h2 className='header--2'>Hear From Our Happy Tourists</h2>
                <p className='text--1'>From stunning natural landscapes to bustling cities and vibrant cultures, Nigeria has something for everyone. At TravelTrove, we're dedicated to helping you discover the best of Nigeri</p>
            </div>
            <div className='HappyTouristContents--2'>
                <div className='HappyTouristContents--2Inner'>
                    <img src={TouristImg01} alt="" className='HappyTouristContents--2InnerImg01'/>
                    <p className='text--1 mbottom2'>
                    “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                    </p>
                    <h6>Mike taylor</h6>
                    <p>Lahore, Pakistan</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HappyTourist