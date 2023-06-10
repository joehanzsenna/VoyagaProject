import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import mainLogo from '../../Assets/HomepageAssets/MainLogo.png'


const NavbarIndex = () => {
  return (
    <div className='containter'>
      <div className='Navbar'> 
        <div className='Navbar-contents'>
            <Link to='/'>
              <img src={mainLogo} alt="" className='mainLogo'/>
            </Link>

            <ul className='Menu'>
              <Link to='/' className="Menu-Link">
                <li>Home</li>
              </Link>

              <Link to='tours' className="Menu-Link">
                <li>Tours</li>
              </Link>

              <Link to='about' className="Menu-Link">
                <li>About Us</li>
              </Link>

              <Link to='contact' className="Menu-Link">
                <li>Contact Us</li> 
              </Link>
            </ul>
          <div className='Navbar-contents-inner'>
            <button className='btn--Signin'>Sign in</button>
            <Link to='/'>
              <button className='btn--GetStarted1'>Get Started</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavbarIndex