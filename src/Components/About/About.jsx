import React from 'react';
import './About.css';
import aboutPic from '../images/about-pic.png';  
import { FaMusic, FaPlane, FaBasketballBall } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="about-container">
        <img src={aboutPic} alt="" />
        <div className="about-content">
          <h2>About Me</h2><br/>
          <p>A skilled web developer from the scenic landscapes of Nepal, blends technical expertise with a creative touch to build captivating online experiences. Dedicated to refining his craft, he embraces challenges and thrives on delivering innovative digital solutions.</p><br/>  
          <div className="details">
            <div>
              <h3>Name:</h3>
              <span>Anurag Neupane</span>
            </div>
            <div>
              <h3>Date of Birth:</h3>
              <span>29 May, 2002</span>
            </div>
            <div>
              <h3>Email:</h3>
              <span>anuragneupane58@gmail.com</span>
            </div>
            <div>
              <h3>Phone:</h3>
              <span>980000000</span>
            </div>
            <h3>Interest</h3>
            <div className="interests">
              
              <span><FaMusic /> Music</span>
              <span><FaPlane /> Travel</span>
              <span><FaBasketballBall /> Sports</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
