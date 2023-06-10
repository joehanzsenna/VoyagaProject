import React from 'react'
import HomeSec4Image01 from '../../../Assets/HomepageAssets/HomeSec4Image01.png'
import HomeSec4Image02 from '../../../Assets/HomepageAssets/HomeSec4Image02.png'
import HomeSec4Image03 from '../../../Assets/HomepageAssets/HomeSec4Image03.png'
import HomeSec4Image04 from '../../../Assets/HomepageAssets/HomeSec4Image04.png'
import HomeSec4Image05 from '../../../Assets/HomepageAssets/HomeSec4Image05.png'

const HomeSec4 = () => {
  return (
    <div className='HomeSec4'>
        <div className='HomeSec4Contents'>
            <h2 className='header--2 mbottom2'>Popular Destinations</h2>
            <div className='HomeSec4ContentsImages'>
                <div className='HomeSec4Inner1 InnerContainer'>
                    <img src={HomeSec4Image01} alt="" className='HomeSec4InnerImages '/>
                </div>
                <div className='HomeSec4Inner2 InnerContainer'>
                    <img src={HomeSec4Image02} alt="" className='HomeSec4InnerImages '/>
                </div>
                <div className='HomeSec4Inner3 InnerContainer'>
                    <img src={HomeSec4Image03} alt="" className='HomeSec4InnerImages '/>
                </div>
                <div className='HomeSec4Inner4 InnerContainer'>
                    <img src={HomeSec4Image04} alt="" className='HomeSec4InnerImages '/>
                </div>
                <div className='HomeSec4Inner5 InnerContainer'>
                    <img src={HomeSec4Image05} alt="" className='HomeSec4InnerImages '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSec4