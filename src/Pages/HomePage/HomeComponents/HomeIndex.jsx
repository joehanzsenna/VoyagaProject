import React from 'react'
import '../HomeStyles/HomeStyle.scss'
import HomeSec1 from './HomeSec1'
import HomeSec2 from './HomeSec2'
import Sponsors from '../../../Components/Sponsors/Sponsors'
import HomeSec3 from './HomeSec3'
import HomeSec4 from './HomeSec4'
import HappyTourist from '../../../Components/HappyTourists/HappyTourist'
import Subscription from '../../../Components/Subscription/Subscription'
import Explore from '../../../Components/Explore/Explore'

const HomeIndex = () => {
  return (
    <div>
      <HomeSec1/>
      <HomeSec2/>
      <Sponsors/>
      <HomeSec3/>
      <HomeSec4/>
      <Subscription/>
      <Explore/>
      <HappyTourist/>
    </div>
  )
}

export default HomeIndex