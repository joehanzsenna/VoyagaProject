import React from "react";
import img1 from '../../../Assets/AboutpageAssets/Group 9265.png'
import '../AboutStyles/AboutSection3.scss'

const AboutSection3 = () => {
  return (
    <div className="aboutSection3">
      <p className="aboutSection3-text1">Why Choose Voyago</p>

      <div className="aboutSection3-wrap">

        <div className="section3-inner-main-wrap1">

          <div className="aboutSection3-inner">
            <div className="section3-inner-wrap">
              <p className="number">500+</p>
              <p className="section3-inner-text1">Awesome Tour</p>
            </div>
            <div className="section3-inner-text2">
            <p>
              At [Company Name], travel is not just a job, it's our passion. We
              believe that exploring new places and experiencing different c
            </p>
            </div>
          </div>

          <div className="aboutSection3-inner">
            <div className="section3-inner-wrap">
              <p className="number">500+</p>
              <p className="section3-inner-text1">Awesome Tour</p>
            </div>
            <div className="section3-inner-text2">
            <p>
              At [Company Name], travel is not just a job, it's our passion. We
              believe that exploring new places and experiencing different c
            </p>

            </div>
          </div>

          <div className="aboutSection3-inner">
            <div className="section3-inner-wrap">
              <p className="number">500+</p>
              <p className="section3-inner-text1">Awesome Tour</p>
            </div>
            <div className="section3-inner-text2">
            <p>
              At [Company Name], travel is not just a job, it's our passion. We
              believe that exploring new places and experiencing different c
            </p>
            </div>

          </div>
        </div>

        <div className="section3-inner-main-wrap2">
          <img src={img1} alt="" />
        </div>

      </div>

    </div>
  );
};

export default AboutSection3;
