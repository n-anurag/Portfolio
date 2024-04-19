import React from 'react';
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import ProgressBar2 from "./ProgressBar/ProgressBar2.jsx";
import ProgressBar3 from "./ProgressBar/ProgressBar3.jsx";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="skillsSection" className="skill_about">
        <section>My Skills</section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dicta.</p>

        <div className="skill-grid">
          <div className="box">
            <ProgressBar />
          </div>
          <div className="box">
            <ProgressBar2 />
          </div>
          <div className="box">
            <ProgressBar3 />
          </div>
          <div className="box">
            <ProgressBar />
          </div>
          <div className="box">
            <ProgressBar2 />
          </div>
          <div className="box">
            <ProgressBar3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
