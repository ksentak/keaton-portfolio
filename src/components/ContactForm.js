import React, { Component } from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// CSS
import '../assets/css/ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    event.target.className += ' was-validated';
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
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
          <div className='row justify-content-center'>
            <div className='col-3 contact-info'>
              <div className='contact-phone'>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <span>Give me a call:</span>
                <p>(609) 439-3423</p>
              </div>
            </div>
            <div className='col-3 contact-info'>
              <div className='contact-email'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <span>Send me an email:</span>
                <p>keatonsentak@gmail.com</p>
              </div>
            </div>
            <div className='col-3 contact-info'>
              <div className='contact-address'>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <span>Currently located:</span>
                <p>Greater Philadelphia Area</p>
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div className='row'>
            <div className='col-10 offset-1 text-center'>
              {/* Contact Form */}
              <div className='contactForm'>
                <form
                  name='contact-form'
                  id='contact-form'
                  onSubmit={this.submitHandler}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        className='form-control formInput'
                        id='name'
                        placeholder='Your name'
                        value={this.state.name}
                        name='name'
                        onChange={this.changeHandler}
                        required
                      ></input>
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        className='form-control formInput'
                        id='email'
                        placeholder='Your email address'
                        name='email'
                        onChange={this.changeHandler}
                        required
                      ></input>
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        className='form-control formInput'
                        id='subject'
                        placeholder='Subject'
                        name='subject'
                        onChange={this.changeHandler}
                        required
                      ></input>
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        className='form-control formInput'
                        id='message'
                        placeholder='Your message'
                        rows='5'
                        name='message'
                        onChange={this.changeHandler}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
