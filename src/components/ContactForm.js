import React, { Component } from 'react';

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
              <h1>
                <span className='main-color'>Contact</span> Me
              </h1>
              <div className='section-underline'></div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row'>
            <div className='col-md-4 contact-info contact-phone'>
              <p>Give me a call:</p>
              <p>(609) 439-3423</p>
            </div>
            <div className='col-md-4 contact-info contact-email'>
              <p>Send me an email:</p>
              <p>keatonsentak@gmail.com</p>
            </div>
            <div className='col-md-4 contact-info contact-address'>
              <p>Currently located:</p>
              <p>Greater Philadelphia Area</p>
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
