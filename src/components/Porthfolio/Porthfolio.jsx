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
                
                <p>Click to visit</p>
            </div>
            
          </div>
           
        </div>






         <h2 className="sub-title2">UI Designs</h2>
        <div className="work-list">
          <div className="work">
            <img src={g} alt="Work 1" />
            <div className="layer">
                <h3>Music App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={h} alt="Work 1" />
            <div className="layer">
                <h3>AI Photo Genarator </h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={a} alt="Work 1" />
            <div className="layer">
                <h3>Anime Movie App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src={a} alt="Work 1" />
            <div className="layer">
                <h3>Webtoon App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={b} alt="Work 1" />
            <div className="layer">
                <h3>Anime Website</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={c} alt="Work 1" />
            <div className="layer">
                <h3>Anime Movie App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
        </div>

        <div className="work-list">
          <div className="work">
            <img src={d} alt="Work 1" />
            <div className="layer">
                <h3>Food Order App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={e} alt="Work 1" />
            <div className="layer">
                <h3>Game App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
          <div className="work">
            <img src={f} alt="Work 1" />
            <div className="layer">
                <h3>Food Order App</h3>
                <p>Click to visit</p>
            </div>
            
          </div>
        </div>


        

      </div>
    </div>
      
  );
};

export default Portfolio;
