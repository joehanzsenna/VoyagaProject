import React from 'react'
import footerLogo from '../../../Assets/ComponentsAssets/MainLogo.png'
import { ImFacebook } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';

const FooterSection1 = () => {
  return (
    <div className='footerSection1'>
        <div className='footerSection1Contents'>
          <div className='footerSection1ContentsInner'>
            <img src={footerLogo} alt="" className='footerSection1ContentsInnerLogo'/>
            <p className='footerText'>Voyago is a travel tour company dedicated to providing exceptional experiences, showcasing Nigeria's rich cultural heritage, and creating lasting memories for our clients</p>
            <div className='footerSection1--icons'>
              <ImFacebook className='footerSection1--iconsInner'/>
              <ImTwitter className='footerSection1--iconsInner'/>
              <ImInstagram className='footerSection1--iconsInner'/>
            </div>
          </div>
          <div className='footerSection1ContentsInner'>
            <h2>Quick Links</h2>
            <li>Home</li>
            <li>Tours</li>
            <li>About</li>
            <li>Contact us</li>
          </div>
          <div className='footerSection1ContentsInner'>
            <h2>Company</h2>
            <li>+00 92 1234 56789</li>
            <li>info@voyago.com</li>
            <li>1 Ogunlesi Street, Onipanu, Lagos</li>
          </div>
          <div className='footerSection1ContentsInner'>
            <h2>More</h2>
            <li>Hotel Reservation</li>
            <li>Affordable Tours</li>
            <li>FAQ’s</li>
            <li>Blog</li>
          </div>
        </div>
        <hr style={{border:'1px solid grey'}}/>

        <div className='footerSection1ContentsInner--2'>
          <h6>Copyright 2021 Voyago |</h6>
          <div className='innerFlex'>
            <h6>Terms & Condition</h6>
            <h6>| Privacy Policy</h6>
          </div>
        </div>
    </div>
  )
}

export default FooterSection1

