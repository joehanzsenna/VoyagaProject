import React from 'react'
import HomeSec1Image from '../../../Assets/HomepageAssets/HomeSec1Image.png'
import HomeSec1Vector from '../../../Assets/HomepageAssets/HomesSec1Vector.png'

const HomeSec1 = () => {
  return (
    <div className='HomeSec1'>
        <div className='HomeSec1Contents'>
            <img src={HomeSec1Image} alt="" className='HomeSec1Image'/>
            <div className='HomeSec1ContentsInner'>
                <h1>Experience The Beauty  Of Nigeria With VOYAGO</h1>
                <img src={HomeSec1Vector} alt="" className='HomeSec1Vector'/>
            </div>
            <form className='HomeSec1ContentsForm'>
                <input type="text" name="search" placeholder='Search for Tours..' id="" className='HomeSec1ContentsFormSearch'/>
                <button className='HomeSec1ContentsFormBtn' type='submit'>Find Now</button>
            </form>
        </div>
    </div>
  )
}

export default HomeSec1