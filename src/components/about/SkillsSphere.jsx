// SkillsSphere.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './Ball';
import { technologies } from './technologies';
import './about.scss';

const SkillsSphere = () => {
  return (
    <motion.div
      className="skills-sphere"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="skills-title">Technical Skills</h3>
      <div className="sphere-container">
        {technologies.map((tech) => (
          <div key={tech.name} className="sphere-item">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </motion.div>
  );
    };

export default SkillsSphere;
