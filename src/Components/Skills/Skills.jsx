import React from 'react';
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import ProgressBar2 from "./ProgressBar/ProgressBar2.jsx";
import ProgressBar3 from "./ProgressBar/ProgressBar3.jsx";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="gap-box"></div>

      <div className="skill_about">
        <h1>My Skills</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

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
