import React from 'react';
import './Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web-Developer', 'UI-Designer'],
    loop: true, // Enable looping
    typeSpeed: 70, // Speed of typing
    deleteSpeed: 50, // Speed of deleting
    delaySpeed: 1000, // Delay before starting next word
  });

  

  return (
     

    <div className="main-content" id='home'>
      <div className="intro">
        <h1>
          Hello, my name is <span className="name">Awanthi Malawanage</span>
        </h1>
        <h2>
          I’m a{' '}
          <span className="role">
            {text}
            <Cursor />
          </span>
        </h2>
        
      </div>
       <div className="about">

        
       </div>
      
    </div>
    
     
  );
};

export default Home;
