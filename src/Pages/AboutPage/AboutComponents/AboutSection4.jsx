import React from 'react'
import '../AboutStyles/AboutSection4.scss'
import img1 from '../../../Assets/AboutpageAssets/image-removebg-preview (5) 1.png'
import img2 from '../../../Assets/AboutpageAssets/image-removebg-preview (1) 1.png'
import img3 from '../../../Assets/AboutpageAssets/image-removebg-preview (3).png'
import img4 from '../../../Assets/AboutpageAssets/image-removebg-preview (4).png'
import img5 from '../../../Assets/AboutpageAssets/image-removebg-preview (6) 1.png'

const AboutSection4 = () => {
  return (
    <div className='aboutSection4'>
        <div className='aboutSection4-image'>
            <img src={img1} alt="" />
        </div>
        <div className='aboutSection4-image'>
            <img src={img2} alt="" />
        </div>
        <div className='aboutSection4-image'>
            <img src={img3} alt="" />
        </div>
        <div className='aboutSection4-image'>
            <img src={img4} alt="" />
        </div>
        <div className='aboutSection4-image'>
            <img src={img5} alt="" />
        </div>

      
    </div>
  )
}

export default AboutSection4
