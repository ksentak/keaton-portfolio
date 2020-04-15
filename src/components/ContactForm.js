import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// CSS
import '../assets/css/ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: '',
      emailError: '',
      subjectError: '',
      messageError: '',
    };
    if (this.state.name.length < 1) {
      isError = true;
      errors.nameError = 'Please enter your name.';
    }

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Please enter a valid email address.';
    }

    if (this.state.subject.length < 1) {
      isError = true;
      errors.subjectError = 'Please enter a subject.';
    }

    if (this.state.message.length < 1) {
      isError = true;
      errors.messageError = 'Please enter a message.';
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  // handleValidation() {
  //   const { name, email, subject, message } = this.state;

  //   let formIsValid = true;

  //   // Name validation
  //   if (!name) {
  //     formIsValid = false;
  //     this.setState({ nameError: 'Please do not leave blank.' });
  //   }

  //   // Email
  //   if (!email) {
  //     formIsValid = false;
  //     this.setState({ emailError: 'Please do not leave blank.' });
  //   }

  //   if (typeof email !== 'undefined') {
  //     let lastAtPos = email.lastIndexOf('@');
  //     let lastDotPos = email.lastIndexOf('.');

  //     if (
  //       !(
  //         lastAtPos < lastDotPos &&
  //         lastAtPos > 0 &&
  //         email.indexOf('@@') === -1 &&
  //         lastDotPos > 2 &&
  //         email.length - lastDotPos > 2
  //       )
  //     ) {
  //       formIsValid = false;
  //       this.setState({ emailError: 'Please enter a valid email address.' });
  //     }
  //   }
  //   // Subject
  //   if (!subject) {
  //     formIsValid = false;
  //     this.setState({ subjectError: 'Please do not leave blank.' });
  //   }
  //   // Message
  //   if (!message) {
  //     formIsValid = false;
  //     this.setState({ messageError: 'Please do not leave blank.' });
  //   }
  //   return formIsValid;
  // }

  handleSubmit(e) {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        username: '',
        usernameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
      });
    }
    // alert('Form submitted');
    // e.target.className += ' was-validated';
    // const { name, email, subject, message } = this.state;
    // let templateParams = {
    //   name: name,
    //   email: email,
    //   subject: subject,
    //   message: message,
    // };
    // emailjs.send(
    //   'flockmail',
    //   'contact_form',
    //   templateParams,
    //   'user_VHzOwlXbbYVfag1ggIWUx'
    // );
    // this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  render() {
    return (
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              {/* Contact Form */}
              <div className='contactForm'>
                <form
                  id='contact-form'
                  onSubmit={this.handleSubmit.bind(this)}
                  className='needs-validation'
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
                        onChange={this.handleChange}
                        placeholder='Your name'
                      ></input>
                      <div className='invalid-feedback'>
                        Please enter your name.
                      </div>
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        className='form-control formInput'
                        onChange={this.handleChange}
                        placeholder='Your email address'
                        required
                      ></input>
                      <div className='invalid-feedback'>
                        Please enter a valid email address.
                      </div>
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
                        onChange={this.handleChange}
                        placeholder='Subject'
                        required
                      ></input>
                      <div className='invalid-feedback'>
                        Please enter a subject.
                      </div>
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
                        onChange={this.handleChange}
                        placeholder='Your message'
                        required
                      ></textarea>
                      <div className='invalid-feedback'>
                        Please enter a message.
                      </div>
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
