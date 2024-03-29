import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

import mylogo from '../images/mylogo.png';
import homepic from '../images/homepic.png';
import bgimg from '../images/bgimg.jpg';


const Home = () => {
    return (
      <>
      
      
        <div className="container_first">
       
            <div className="header">
                <div className="logo">
                    <img src={mylogo} alt="Logo" />
                </div>

             
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
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
                        <img src= {homepic} alt="" />
                    </div>
            </div>
          
      
        </div>
       
        </> 
    );
};

export default Home;
