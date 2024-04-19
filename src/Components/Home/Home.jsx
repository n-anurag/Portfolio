// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import mylogo from '../images/mylogo.png';
import homepic from '../images/homepic.png';

const Home = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos <= 0 || currentScrollPos <= prevScrollPos); // Show header if at top or scrolling up
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);




  return (
    <>
      <div className="container_first">
        <div className={`header ${visible ? 'visible' : 'hidden'}`}>
          <div className="logo">
            <img src={mylogo} alt="Logo" />
          </div>
          <ul>
         
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" >Project</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="content">
          <div className="content1">
            <div className="typewrite">
              <Typewriter
                options={{
                  strings: ['Hi I am a <br> Web Developer'],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 5,
                }}
              />
            </div>
            <div className="my-button">
              <button>Contact Me</button>
              <button id='tnd-button'>Download CV</button>
            </div>
          </div>
          <div className="picture">
            <img src={homepic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
