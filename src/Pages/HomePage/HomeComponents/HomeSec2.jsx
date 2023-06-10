import React from 'react'
import HomeSec2Image01 from '../../../Assets/HomepageAssets/HomeSec2Image01.png'
import HomeSec2Image02 from '../../../Assets/HomepageAssets/HomeSec2Image02.png'
import HomeSec2Pattern from '../../../Assets/HomepageAssets/HomeSec2Pattern.png'
import HomeSec2Arrow from '../../../Assets/HomepageAssets/HomeSec2Arrow.png'
import { Box } from "@chakra-ui/react"

const HomeSec2 = () => {
  return (
    <div className='HomeSec2'>
        <div className='HomeSec2Contents'>
            <Box className='HomeSec2Contents--1'>
                <h2 className='header--2 mbottom1'>Explore Nigeria with our expert guidance</h2>
                <p className='text--1 mbottom2' mb>From stunning natural landscapes to bustling cities and vibrant cultures, Nigeria has something for everyone. At TravelTrove, we're dedicated to helping you discover the best of Nigeria with our expert guidance. Our team of knowledgeable experiences.</p>
                <div className='HomeSec2Contents--1Btns'>
                    <button className='btn--GetStarted2'>Get Started</button>
                    <button className='btn--Demo'>Watch Demo</button>
                </div>
            </Box>
            <div className='HomeSec2Contents--2'>
                <div className='HomeSec2Contents--2Inner'>
                    <img src={HomeSec2Image01} alt="" className='HomeSec2Contents--2InnerImage01'/>
                    <img src={HomeSec2Image02} alt="" className='HomeSec2Contents--2InnerImage02'/>
                    <img src={HomeSec2Pattern} alt="" className='HomeSec2Contents--2InnerPattern'/>
                    <img src={HomeSec2Arrow} alt="" className='HomeSec2Contents--2InnerArrow'/>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default HomeSec2