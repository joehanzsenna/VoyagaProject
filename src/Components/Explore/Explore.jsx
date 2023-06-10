import React,{ useState } from 'react'
import './ExploreStyles.scss'
import { ExploreDb } from '../../Pages/HomePage/HomeComponents/HomeIndexDB'

const Explore = () => {
    const [places] = useState(ExploreDb)
    
  return (
    <div className='Explore'>
        <div className='ExploreContents'>
            <div className='ExploreContentsHeader'>
                <h2 className='header--2'>Explore Nigeria: Latest Tips and Insights for Touring</h2>
            </div>
            
            <div className='ExploreContentsInner'>
                {places.map((ExploreDb)=>{
                    const   {id, image, description, text} = ExploreDb
                    return(
                    <div key={id} className='ExploreContentsInnerItem'>
                        <img src={image} alt="" className='ExploreContentsInnerItemImg'/>
                       <div className='InnerContent'>
                            <h6 className='ExploreText1'>{description}</h6>
                            <h5 className='ExploreText2'>{text}</h5>
                       </div>
                    </div>
                    )
                })}
            </div>

        </div>

    </div>
  )
}

export default Explore