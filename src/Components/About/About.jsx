import React from 'react';
import './About.css';
import profilePic from '../images/profile-pic.png';  
import { FaMusic, FaPlane, FaBasketballBall } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className="gap-box"></div>
      <div className="about-container">
        <img src={profilePic} alt="" />
        <div className="about-content">
          <h2>About Me</h2>
          <br/>
          <p>A skilled web developer from the scenic landscapes of Nepal, blends technical expertise with a creative touch to build captivating online experiences. Dedicated to refining his craft, he embraces challenges and thrives on delivering innovative digital solutions.</p><br/>  
          <div className="details">
            <div className="name">
              <div className="name1">
              <h3>Name:</h3>
              <p>Anurag Neupane</p>
              </div>
              <div className="name1">
              <h3>DOB:</h3>
              <p>29 May 2002</p>
              </div>
              <div className="name1">
              <h3>Email:</h3>
              <p>anuragneupane58@gmail.com</p>
              </div>
              <div className="name1">
              <h3>Phone:</h3>
              <p>98000000</p>
              </div>
            </div>
            <div className="name-details">
            
            </div>
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
