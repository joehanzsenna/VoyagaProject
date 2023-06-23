import React from "react";
import img1 from '../../../Assets/AboutpageAssets/Group 9264.png'
import '../AboutStyles/AboutStyleSection2.scss'

const AboutSection2 = () => {
  return (
    <div className="aboutSection2">
    
      <div className="section2-wrap1">
        <p className="section2-text1">Our Passion And Dedication To Travel</p>

        <div className="section2-inner-wrap">
          <div className="inner-wrap1 ">
            <p id="number">10</p>
            <p className="inner-text1">Years Experience</p>
          </div>
          <div className="inner-wrap2">
            <p id="number">100+</p>
            <p className="inner-text2">Tour Guide</p>
          </div>
          <div className="inner-wrap2">
            <p id="number">500+</p>
            <p className="inner-text2">Traveller Connect</p>
          </div>
        </div>
        <p className="section2-text2">
          At [Company Name], travel is not just a job, it's our passion. We
          believe that exploring new places and experiencing different cultures
          can be transformative and life-changing. That's why we're dedicated to
          creating unforgettable travel experiences for our clients.{" "}
        </p>
        <div className="section2-wrap1-button">
        <button>Get Started</button>
        </div>
      </div>

      <div className="section2-wrap2">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default AboutSection2;
