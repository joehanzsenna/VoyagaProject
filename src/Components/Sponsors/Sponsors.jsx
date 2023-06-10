import React from 'react'
import './SponsorsStyle.scss'
import SponsorsIconArik from '../../Assets/ComponentsAssets/SponsorsIconArik.png'
import SponsorsIconTranscorp from '../../Assets/ComponentsAssets/SponsorsIconTranscorp.png'
import SponsorsIconJumia from '../../Assets/ComponentsAssets/SponsorsIconJumia.png'
import SponsorsIconAirpeace from '../../Assets/ComponentsAssets/SponsorsIconAirpeace.png'
import SponsorsIconAtlantic from '../../Assets/ComponentsAssets/SponsorsIconAtlantic.png'

const Sponsors = () => {
  return (
    <div className='Sponsors'>
        <div className='SponsorsContents'>
            <img src={SponsorsIconArik} alt="" />
            <img src={SponsorsIconTranscorp} alt="" />
            <img src={SponsorsIconJumia} alt="" />
            <img src={SponsorsIconAirpeace} alt="" />
            <img src={SponsorsIconAtlantic} alt="" />
        </div>
    </div>
  )
}

export default Sponsors