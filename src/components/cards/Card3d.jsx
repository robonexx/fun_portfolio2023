import React, { useState } from 'react';
import './card3d.css'; // Import your CSS file

const Card3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState('none');

  const handleMouseMove = (event) => {
    const xaxis = (window.innerWidth / 2 - event.pageX) / 20;
    const yaxis = (window.innerHeight / 2 - event.pageY) / 20;
    setRotation({ x: -xaxis, y: yaxis });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setTransition('all 0.6s ease-in');
  };

  const handleMouseEnter = () => {
    setTransition('none');
  };

  return (
    <div className="content">
      <div
        className="box"
        style={{
          transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
          transition: transition,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="image">
          <img src="./Jokr.png" alt="the joker" />
        </div>
      </div>
      <div className="text">
        <h1>!</h1>
        <h2>Ain't no Joke, Watch me now!</h2>
      </div>
    </div>
  );
};

export default Card3D;
