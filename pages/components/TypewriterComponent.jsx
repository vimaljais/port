import React from 'react';
import Typewriter from 'typewriter-effect';
import 'animate.css';

const TypewriterComponent = () => {
  return (
    <div className='font-color text-8xl font-bold  cursor-default animate__animated animate__fadeInUp'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('John Doe').pauseFor(1000).deleteAll().start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
