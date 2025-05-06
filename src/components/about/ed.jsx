
import './about.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Updated SkillBall component in About.jsx
const SkillBall = ({ icon, name }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <motion.div
      className="skill-bubble" // Changed to use bubble styling
      onClick={() => setIsRotated(!isRotated)}
      animate={{ 
        rotateY: isRotated ? 360 : 0,
        scale: isRotated ? 1.1 : 1
      }}
      whileHover={{
        scale: 1.2,
        y: -10,
        rotateZ: 15,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        rotateX: 15 // Add subtle 3D tilt
      }}
    >
      <div className="bubble-content">
        <img src={icon} alt={name} className="skill-icon" />
        <span className="skill-name">{name}</span>
      </div>
    </motion.div>
  );
};

{/*const SkillBall = ({ icon, name }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <motion.div
      className="skill-ball"
      onClick={() => setIsRotated(!isRotated)}
      animate={{ 
        rotateY: isRotated ? 360 : 0,
        scale: isRotated ? 1.1 : 1
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img src={icon} alt={name} className="skill-icon" />
    </motion.div>
  );
};*/}

