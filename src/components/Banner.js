import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Socials from './Socials';
import '../assets/css/Banner.css';

class Banner extends Component {
  render() {
    const paramConfig = {
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        color: {
          value: '#ffffff',
        },
        opacity: {
          value: 0.1,
        },
        size: {
          value: 5,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 1,
          direction: 'top',
          out_mode: 'out',
        },
      },
    };
    return (
      <div className='Banner'>
        <Particles className='particles' height={475} params={paramConfig} />
        <div className='jumbotron jumbotron-fluid'>
          <div className='banner-content'>
            <h1>
              <span className='color-theme'>Keaton</span> Sentak
            </h1>
            <h6>Full-Stack Developer</h6>
            <Socials />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
