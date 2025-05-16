// Loader.jsx
import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import './about.scss';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        <span className="canvas-load" />
        <p className="loader-text">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;

