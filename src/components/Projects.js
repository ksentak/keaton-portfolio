import React, { Component } from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// CSS
import '../assets/css/Projects.css';
// Images
import ReactColors from '../assets/images/react-colors.png';
import ReactAuth from '../assets/images/react-auth.png';
import LibertyBeans from '../assets/images/liberty-beans.png';
import GoogleBooks from '../assets/images/GoogleBooks.png';
import Omega from '../assets/images/omega.png';
import MattWalksDogs from '../assets/images/matt-walks-dogs.png';

class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <div className='container'>
          {/* Row 1 */}
          <div className='row'>
            <div className='col-12'>
              <h1 className='section-title'>Portfolio</h1>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row text-center'>
            {/* Project 1 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal1'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={ReactColors}
                  alt='React-Colors'
                />
                <p className='project-title'>React Colors</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal2'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={ReactAuth}
                  alt='React-Auth'
                />
                <p className='project-title'>React User Authentication</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal3'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={LibertyBeans}
                  alt='Liberty Beans Coffee'
                />
                <p className='project-title'>Liberty Beans Coffee</p>
              </div>
            </div>
            {/* Project 4 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal4'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={GoogleBooks}
                  alt='Google Books App'
                />
                <p className='project-title'>Google Books</p>
              </div>
            </div>
            {/* Project 5 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal5'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={Omega}
                  alt='Omega'
                />
                <p className='project-title'>Omega</p>
              </div>
            </div>
            {/* Project 6 */}
            <div className='col-lg-4 col-md-6'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal6'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <FontAwesomeIcon icon={faPlus} size='3x'></FontAwesomeIcon>
                  </div>
                </div>
                <img
                  className='img-fluid portfolio-img'
                  src={MattWalksDogs}
                  alt='Matt Walks Dogs'
                />
                <p className='project-title'>Matt Walks Dogs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modals */}
        {/* Portfolio Modal 1 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal1'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal 2 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal2'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal 3 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal3'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal 4 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal4'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal 5 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal5'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Modal 6 */}
        <div
          className='portfolio-modal modal fade'
          id='portfolioModal6'
          tabIndex='-1'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        React-Colors
                      </h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line'></div>
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star'></i>
                        </div>
                        <div className='divider-custom-line'></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className='img-fluid rounded mb-5'
                        src={ReactColors}
                        alt='React Colors'
                      />
                      {/* Portfolio Modal - Text */}
                      <p>A custom color palette site built with react.</p>
                      <p className='mb-4'>
                        <a
                          href='https://ksentak.github.io/matt-walks-dogs/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Site
                        </a>
                      </p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Modals */}
      </div>
    );
  }
}

export default Projects;
