import React from 'react'
import './SubscriptionStyle.scss'

const Subscription = () => {
  return (
    <div className='Subscription'>
        <div className='SubscriptionContent'>
            <div className='SubscriptionContentItem'>
                <h2 className='header--2 mbottom1' style={{color:'white'}}>Enjoy a 20% Discount</h2>
                <p className='text--1 mbottom2'>From stunning natural landscapes to bustling cities and vibrant cultures, Nigeria has something for everyone. At TravelTrove, we're dedicated to helping you discover the best of Nigeria with our expert guidance.</p>
                <input type="email" placeholder='Enter Your Email' className='SubscriptionContentInput'/>
            </div>
        </div>
    </div>
  )
}

export default Subscription