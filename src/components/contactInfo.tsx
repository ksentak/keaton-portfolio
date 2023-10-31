import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactInfo: React.FC = () => {
  return (
    <div className='ContactForm'>
      <div className='container'>
        {/* Row 1 */}
        <div className='row'>
          <div className='col-12'>
            <h1 className='section-title'>
              <span className='main-color'>Contact</span> Me
            </h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className='row'>
          <div className='col-lg-6'>
            <div className='contact-info'>
              <div className='email-info'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='contact-icon'
                  fixedWidth
                ></FontAwesomeIcon>
                <span>Send me an email:</span>
                <p>mail@keatonsentak.com</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='contact-info'>
              <div className='location-info'>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className='contact-icon'
                  fixedWidth
                ></FontAwesomeIcon>
                <span>Currently located:</span>
                <p>Greater Philadelphia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
