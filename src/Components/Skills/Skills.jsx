import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [htmlCompletion, setHtmlCompletion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const htmlControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (htmlCompletion < 90) {
        setHtmlCompletion(htmlCompletion + 1);
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [htmlCompletion]);

  useEffect(() => {
    if (!isLoading) {
      htmlControls.start({
        width: `${htmlCompletion}%`,
        transition: { duration: 1 }
      });
    }
  }, [isLoading, htmlCompletion, htmlControls]);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skill">
        <div className="skill-name">HTML</div>
        <div className="skill-level">90%</div>
      </div>
      <div className="skill">
        <div className="skill-name">CSS</div>
        <div className="skill-level">80%</div>
      </div>
      <div className="skill">
        <div className="skill-name">JavaScript</div>
        <div className="skill-level">60%</div>
      </div>
      <div className="skill">
        <div className="skill-name">React</div>
        <div className="skill-level">60%</div>
      </div>
      <motion.div
        className="loading"
        animate={htmlControls}
      >
        <motion.div
          className="loading-bar"
        />
      </motion.div>
      {isLoading && (
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading HTML completion...
        </motion.div>
      )}
    </div>
  );
}

export default Skills;
