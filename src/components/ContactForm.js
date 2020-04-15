import React, { Component } from 'react';
import emailjs from 'emailjs-com';
// CSS
import '../assets/css/ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    emailjs.send('flockmail', 'contact_form', templateParams);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              {/* Contact Form */}
              <div className='contactForm'>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  id='contact-form'
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        className='form-control formInput'
                        onChange={this.handleChange.bind(this, 'name')}
                        placeholder='Your name'
                        // required
                      ></input>
                      {/* <div className='valid-feedback'>Looks good!</div> */}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        className='form-control formInput'
                        onChange={this.handleChange.bind(this, 'email')}
                        placeholder='Your email address'
                        // required
                      ></input>
                      {/* <div className='invalid-feedback'>
                        Please provide a valid email address.
                      </div>
                      <div className='valid-feedback'>Looks good!</div> */}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        value={this.state.subject}
                        className='form-control formInput'
                        onChange={this.handleChange.bind(this, 'subject')}
                        placeholder='Subject'
                        // required
                      ></input>
                      {/* <div className='invalid-feedback'>
                        Please provide a subject.
                      </div>
                      <div className='valid-feedback'>Looks good!</div> */}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows='5'
                        name='message'
                        value={this.state.message}
                        className='form-control formInput'
                        onChange={this.handleChange.bind(this, 'message')}
                        placeholder='Your message'
                        // required
                      ></textarea>
                      {/* <div className='invalid-feedback'>
                        Please provide a message.
                      </div>
                      <div className='valid-feedback'>Looks good!</div> */}
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
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
