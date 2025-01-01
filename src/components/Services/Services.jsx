import React from 'react';
import './Services.css';

const Services = () => {
  return (
     
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-crop"></i>
            <br />
            <h2>UI Design</h2>
            <br />
            <p>
              I am doing UI designing using Figma. Here are some app and
              website designs I created using Figma.
            </p>
            <a href="#porthfolio">See more</a>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <br />
            <h2>Web-Development</h2>
            <br />
            <p>
              I create websites using HTML, CSS, and JavaScript.
            </p>
            <a href="#porthfolio">See more</a>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Services;
