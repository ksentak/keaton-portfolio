import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Socials from './socials';

const Banner: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: {
          value: 75,
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 0.4,
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
          random: true,
        },
        move: {
          enable: true,
          random: true,
          speed: 1,
        },
      },
    }),
    [],
  );

  return (
    <div className='Banner'>
      {init && (
        <Particles
          className='particles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className='jumbotron jumbotron-fluid'>
        <div className='banner-content'>
          <h1>
            <span className='main-color'>Keaton</span> Sentak
          </h1>
          <h6>Software Engineer</h6>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Banner;
