import React from 'react'
import HomeSec1Image from '../../../Assets/HomepageAssets/HomeSec1Image.png'
import HomeSec1Vector from '../../../Assets/HomepageAssets/HomesSec1Vector.png'
import Searchbar from '../../../Components/SearchBar/Searchbar'
// import NavbarIndex from '../../../Components/Navbar/NavbarIndex'

const HomeSec1 = () => {
  return (
    <div className='HomeSec1'>
      {/* <NavbarIndex/> */}
        <div className='HomeSec1Contents'>
            {/* <img src={HomeSec1Image} alt="" className='HomeSec1Image'/> */}
            <div className='HomeSec1ContentsInner'>
                <h1>Experience The Beauty  Of Nigeria With VOYAGO</h1>
                <img src={HomeSec1Vector} alt="" className='HomeSec1Vector'/>
            </div>
            <Searchbar/>
        </div>
    </div>
  )
}

export default HomeSec1