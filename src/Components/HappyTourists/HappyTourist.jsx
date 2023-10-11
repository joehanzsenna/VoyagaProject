import React from 'react'
import './HappyTourist.scss'
import TouristImg01 from '../../Assets/ComponentsAssets/HappyTouristImg.png'
import { Heading, Text } from '@chakra-ui/react'

const HappyTourist = () => {
    return (
        <div className='HappyTourist'>
            <div className='HappyTouristContents'>
                <div className='HappyTouristContents--1'>
                    <Heading fontSize={{ base: '3.5rem', md: '45px' }} mb='3rem' fontWeight={'600'} fontFamily={'Poppins'} color={'#0F2454'} textAlign={{ base: '', md: 'left' }} className='header--2'>Hear From Our Happy Tourists</Heading>
                    <Text textAlign={'left'} color={'#676977'} fontWeight={'400'} className='text--1'>From stunning natural landscapes to bustling cities and vibrant cultures, Nigeria has something for everyone. At TravelTrove, we're dedicated to helping you discover the best of Nigeri</Text>
                </div>
                <div className='HappyTouristContents--2'>
                    <div className='HappyTouristContents--2Inner'>
                        <img src={TouristImg01} alt="" className='HappyTouristContents--2InnerImg01' />
                        <p className='text--1 mbottom2'>
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </p>
                        <h6>Mike taylor</h6>
                        <p>Lahore, Pakistan</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HappyTourist