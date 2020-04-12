import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Socials extends Component {
  render() {
    return (
      <div className='Socials'>
        <ul className='social-list'>
          {/* LinkedIn */}
          <li className='social-inline-item'>
            <a
              href='https://www.linkedin.com/in/ksentak/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          {/* GitHub */}
          <li className='social-inline-item'>
            <a
              href='https://github.com/ksentak'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          {/* Stack Overflow */}
          <li className='social-inline-item'>
            <a
              href='https://stackoverflow.com/story/ksentak'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </li>
          {/* Email */}
          <li className='social-inline-item'>
            <a
              href='https://stackoverflow.com/story/ksentak'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Socials;
