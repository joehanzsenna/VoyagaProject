import React from "react";
import "../AboutStyles/AboutSection5.scss";
import img from '../../../Assets/AboutpageAssets/Group 67.png'

const AboutSection5 = () => {
  return (
    <div className="aboutSection5">
      <div className="aboutSection5-wrap1">
        <p className="aboutSection5-wrap1-text1">hear From Our Happy Tourists</p>
        <p className="aboutSection5-wrap1-text2">
          From stunning natural landscapes to bustling cities and vibrant
          cultures, Nigeria has something for everyone. At TravelTrove, we're
          dedicated to helping you discover the best of Nigeri
        </p>
      </div>

      <div className="aboutSection5-wrap2">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default AboutSection5;
