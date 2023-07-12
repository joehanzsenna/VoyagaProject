import React from 'react'
import '../AboutStyles/AboutSection7.scss'
import img1 from "../../../Assets/AboutpageAssets/Group 9239 (1).png";
import img2 from "../../../Assets/AboutpageAssets/Group 9239 (2).png";
import img3 from "../../../Assets/AboutpageAssets/Group 9239.png";
import img4 from "../../../Assets/AboutpageAssets/Image (1).png";


const AboutSection7 = () => {
  return (
    <div className='aboutSection7'>

        <div className='aboutSection7-wrap1'>
            <p className='aboutSection7-text'>Book Your Next Trip in Three Easy Steps</p>

        <div className='aboutSection7-inner'>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
            <p className='aboutSection7-inner-text1'>We offer best services</p>
            <p className='aboutSection7-inner-text2'>Lorem Ipsum is not simply random text</p>

            </div>
        </div>

        <div className='aboutSection7-inner-special'>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
            <p className='aboutSection7-inner-text1'>Schedule your trip</p>
            <p className='aboutSection7-inner-text2'>It has roots in a piece of classical</p>
            </div>
        </div>

        <div className='aboutSection7-inner'>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
            <p className='aboutSection7-inner-text1'>Get discounted coupons</p>
            <p className='aboutSection7-inner-text2'>Lorem Ipsum is not simply random text</p>
            </div>
        </div>

        </div>

        <div className='aboutSection7-wrap2'>
            <img src={img4} alt="" />
       </div>
      
    </div>
  )
}

export default AboutSection7
