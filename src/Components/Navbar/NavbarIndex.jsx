import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import mainLogo from '../../Assets/HomepageAssets/MainLogo.png'
import { Button } from '@chakra-ui/react'
import {FiMenu} from 'react-icons/fi'

const NavbarIndex = () => {
  const [toggle, setToggle] = useState('navInner');

  function menuClick (){
    if (toggle === "navInnerActive navInner") {
      setToggle("navInnerAvtive navInner");
    } else {
      setToggle("navInner");
    }
  }

  return (
    <div className="containter">
      <div className="Navbar">
        <div className="Navbar-contents">
          <Link to="/">
            <img src={mainLogo} alt="" className="mainLogo" />
          </Link>
          <ul className={toggle}>
            <div className="navList">
              <Link to="/" className="navList-Link">
                <li className="navList-li">Home</li>
              </Link>
              <Link to="tours" className="navList-Link">
                <li className="navList-li">Tours</li>
              </Link>
              <Link to="about" className="navList-Link">
                <li className="navList-li">About Us</li>
              </Link>
              <Link to="contact" className="navList-Link">
                <li className="navList-li">Contact Us</li>
              </Link>
            </div>
            <div className="navInner-btns">
              <Link to="/">
                <Button
                  width={"165px"}
                  bg={"transparent"}
                  border={"1px solid white"}
                  color={"white"}
                  borderRadius={"5px"}
                  cursor={"pointer"}
                  height={"61px"}
                  fontSize={"18px"}
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/">
                <Button
                  color={"#fff"}
                  borderRadius={"5px"}
                  bg={"#0fbb3f"}
                  border={"none"}
                  width={"165px"}
                  cursor={"pointer"}
                  p={"1.5"}
                  height={"61px"}
                  // _hover={'bg:red,'}
                  fontSize={"18px"}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </ul>
          <div className="Navbar-contents-icon">
            <FiMenu
              style={{ cursor: "pointer" }}
              onClick={menuClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarIndex