import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/Info.css';

import Headshot from '../assets/images/profile-headshot.jpg';

class Info extends Component {
  render() {
    return (
      <div className='Info'>
        <div className='container'>
          {/* Row 1 */}
          <div className='row'>
            <div className='col-12'>
              <h1>
                <span className='main-color'>About</span> Me
              </h1>
              <div className='section-underline'></div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row'>
            <div className='col-6'>
              <img
                src={Headshot}
                class='img-fluid profile-picture'
                alt='Profile'
              />
            </div>
            <div className='col-6 about-section'>
              <p className='about-text'>
                A Full-Stack Developer and graduate of both Rutgers University
                and the University of Pennsylvania LPS Coding Bootcamp looking
                to contribute long-term organizational value through my
                knowledge of both front and back-end technologies. Well-versed
                in various web technologies such as JavaScript, Node.js,
                React.js, MongoDB and MySQL used to generate fully functional
                websites, web applications, and databases. Equipped to work
                collaboratively in a team setting to ensure optimal results for
                user and technology centered designs.
              </p>
              <Link to='assets/files/KeatonSentakResume.pdf' target='_blank'>
                <button class='resume-btn'>Download Resume</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
