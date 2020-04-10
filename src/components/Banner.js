import React, { Component } from 'react';
import Particles from 'react-particles-js';

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
        <Particles
          className='mi-home-particle particles'
          params={paramConfig}
        />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className='mi-home-content banner-content'>
                <h1>
                  Hi, I'm <span className='color-theme'>Keaton</span>
                </h1>
                <p>Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
