import React from 'react';
 

import a from '../../assets/a.png';
import b from '../../assets/b.png';
import c from '../../assets/c.png';
import d from '../../assets/d.png';
import e from '../../assets/e.png';
import f from '../../assets/f.png';
import g from '../../assets/g.png';
import h from '../../assets/h.png';
import wa from '../../assets/wa.png';
import image from '../../assets/image.png';
 


import './Porthfolio.css';

const Portfolio = () => {
  return (
     
    <div id="porthfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
         

        <h2 className="sub-title2">Web Development</h2>
        <div className="work-list">
          <div className="work">
            <img src={wa} alt="Work 1" />
            <div className="layer">
                <h3>My Porthfolio Website</h3>
                <p> 

"Designed and developed a personal portfolio website showcasing my skills and projects. Implemented React to create a user-friendly and visually appealing online presence. </p>
                <a href="https://awanthiy.github.io/Myportfolio/">Click to visit</a> 
                
            </div>
            
          </div>
           
        </div>

        <div className="work-list">
          <div className="work">
            <img src={image} alt="Work 1" />
            <div className="layer">
                <h3>Simple GYM website</h3>
                <p> 

                Developed a dynamic and interactive portfolio website using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Leveraged React for front-end development, Express.js for server-side logic, and MongoDB for data storage. Demonstrated skills in full-stack development, including API creation, data modeling, and state management.</p>
                <a href="https://github.com/Awanthiy/GYM-Website-MERN">Click to visit</a> 
                
            </div>
            
          </div>
           
        </div>






         <h2 className="sub-title2">UI Designs</h2>
        <div className="work-list">
          <div className="work">
            <img src={g} alt="Work 1" />
            <div className="layer">
                <h3>Music App</h3>
                <a href="https://www.figma.com/proto/Vx6RYfU0cZlisTV6X1D8Zo/Untitled?node-id=23-3">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={h} alt="Work 1" />
            <div className="layer">
                <h3>AI Photo Genarator </h3>
                <a href="https://www.figma.com/proto/DPKrowGy1IJm77bB4r0wnT/Untitled?node-id=1-2">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={a} alt="Work 1" />
            <div className="layer">
                <h3>Webtoon App</h3>
                <a href="https://www.figma.com/proto/shUiDgs1P9Yt9AVVL3qge0/toonweb?node-id=9-77">Click to visit</a> 
            </div>
            
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src={a} alt="Work 1" />
            <div className="layer">
                <h3>Webtoon App</h3>
                <a href="https://www.figma.com/proto/shUiDgs1P9Yt9AVVL3qge0/toonweb?node-id=9-77">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={b} alt="Work 1" />
            <div className="layer">
                <h3>Anime Website</h3>
                <a href="https://www.figma.com/proto/LnnydhD81Qn705C1TfTFOc/Untitled?node-id=9-6">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={c} alt="Work 1" />
            <div className="layer">
                <h3>Anime Movie App</h3>
                <a href="https://www.figma.com/proto/LnnydhD81Qn705C1TfTFOc/Untitled?node-id=9-6">Click to visit</a> 
            </div>
            
          </div>
        </div>

        <div className="work-list">
          <div className="work">
            <img src={d} alt="Work 1" />
            <div className="layer">
                <h3>Food Order App</h3>
                <a href="https://www.figma.com/design/gKmz7kVlUF2dCCowCs1Ggm/Untitled?node-id=0-1&p=f&t=zZvd00HTenkJ5ip4-0">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={e} alt="Work 1" />
            <div className="layer">
                <h3>Game App</h3>
                <a href="https://www.figma.com/design/gKmz7kVlUF2dCCowCs1Ggm/Untitled?node-id=0-1&p=f&t=zZvd00HTenkJ5ip4-0">Click to visit</a> 
            </div>
            
          </div>
          <div className="work">
            <img src={f} alt="Work 1" />
            <div className="layer">
                <h3>Food Order App</h3>
                <a href="https://www.figma.com/design/gKmz7kVlUF2dCCowCs1Ggm/Untitled?node-id=0-1&p=f&t=zZvd00HTenkJ5ip4-0">Click to visit</a> 
            </div>
            
          </div>
        </div>


        

      </div>
    </div>
      
  );
};

export default Portfolio;
