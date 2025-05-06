import { motion } from 'framer-motion';
import { useState } from 'react';
import './about.scss';

const skills = [
  { icon: '/c-icon.png', name: 'C' },
  { icon: '/js-icon.png', name: 'JavaScript' },
  { icon: '/ts-icon.png', name: 'TypeScript' },
  { icon: '/react-icon.png', name: 'React' },
  { icon: '/node-icon.png', name: 'Node.js' },
  { icon: '/html5-icon.png', name: 'HTML5' },
  { icon: '/css-3-icon.png', name: 'CSS' },
  { icon: '/git-icon.png', name: 'Git' },
  { icon: '/python-icon.png', name: 'Python' },
  { icon: '/django-icon.png', name: 'Django' },
  { icon: '/sql-icon.png', name: 'SQL' },
];

const SkillBubble = ({ icon, name }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <motion.div
      className="skill-bubble"
      onClick={() => setIsRotated(!isRotated)}
      animate={{ 
        rotateY: isRotated ? 360 : 0,
      }}
      // Remove scale from animate
      whileHover={{
        scale: 1.1, // Keep hover scale but remove from click
        y: -10,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        rotateX: 15,
        rotateY: 15
      }}
    >
      <div className="bubble-content">
        <img src={icon} alt={name} className="skill-icon" />
        <span className="skill-name">{name}</span>
      </div>
    </motion.div>
  );
};

const SkillsSphere = () => (
  <motion.div 
    className="skills-sphere"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-100px", once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="skills-title">Technical Skills</h3>
    <div className="sphere-container">
      {skills.map((skill, index) => (
        <SkillBubble 
          key={index} 
          {...skill} 
          custom={index} 
        />
      ))}
    </div>
  </motion.div>
);

export default SkillsSphere;
