import React, { useState } from 'react';
import './Aboutus.css';
import awanthi from '../../assets/awanthi.jpg';


const Aboutus = () => {
  const [activeTab, setActiveTab] = useState('skills'); // State for active tab

  const opentab = (tabName) => {
    setActiveTab(tabName); // Update the active tab
  };

  return (
    
    <div className="container" id='aboutus'>
         <h1 className="sub-title">About Me</h1>
      <div className="row">
     
      
        {/* About Image */}
        <div className="about-col-1">
        <img src={awanthi} alt="awanthi" />
        </div>

        {/* About Content */}
        <div className="about-col-2">
          
          <p>
          I’ve completed my second year as an undergraduate at NSBM Green University, where I’m pursuing a degree in Software Engineering. As a developer with a passion for learning, I’m constantly exploring new programming languages and sharpening my skills in UX/UI design, web development, and back-end technologies. I enjoy creating digital solutions that are both innovative and user-friendly, and I’m excited to continue growing in the tech field.
          </p>

           

          {/* Tab Content */}
           <br />
           <div className="mservices">
            <h3>My services</h3>
            <p>Web Development</p>
            <p>UI Design</p>
            <p>App Development</p>
           </div>
        </div>
      </div>
    </div>
     
  );
};
 

export default Aboutus;
