import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        ("https://v1.nocodeapi.com/awym/google_sheets/lJUYdYHcGvPbtwpQ?tabId=Sheet1"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
     await response.json();
     setData({...data,name:"",email:"",message:""});
    }catch(err){
        console.log(err);
    }
};
       

  return (
    
    <div id='contact'>
      <div id="contact">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <FontAwesomeIcon icon={faPaperPlane} /> awanthiyasodara@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPaperPlane} /> +94786674274
              </p>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/awanthi-malawanage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://github.com/Awanthiy?tab=overview&from=2024-07-01&to=2024-07-02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://discord.com/invite/awym"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
              <p class="cvsec">
                <ul> 
                <li>
              <a href="/im/awym.pdf" 
               target="_blank"
               rel="noopener noreferrer" download  >
                Download CV
              </a>
              </li>
              </ul>
              </p>
            </div>

            {/* Right Section */}
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  required
                  value={email}
                  onChange={handleChange}
                />
                <textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  required
  value={message}
  onChange={handleChange}
></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

         
      </div>
    </div>
    
  );
};

export default Contact;
