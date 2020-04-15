import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

// CSS
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/css/ContactForm.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactFormTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      toastify: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.setState({ toastify: toast.success('Default Notification !') });

      const { name, email, subject, message } = this.state;
      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);
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
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.setState({ toastify: toast.error('Error Notification !') });
    }
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  notify = () => {
    // console.log(this.state.toastify);
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              {/* Contact Form */}
              <div className='contactForm'>
                <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        className={`form-control formInput ${
                          formErrors.name.length > 0 ? 'error' : null
                        }`}
                        onChange={this.handleChange}
                        placeholder='Your name'
                        noValidate
                      ></input>
                      {formErrors.name.length > 0 && (
                        <span className='errorMessage m-0 p-0'>
                          {formErrors.name}
                        </span>
                      )}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        className={`form-control formInput ${
                          formErrors.email.length > 0 ? 'error' : null
                        }`}
                        onChange={this.handleChange}
                        placeholder='Your email address'
                      ></input>
                      {formErrors.email.length > 0 && (
                        <span className='errorMessage m-0 p-0'>
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        value={this.state.subject}
                        className={`form-control formInput ${
                          formErrors.subject.length > 0 ? 'error' : null
                        }`}
                        onChange={this.handleChange}
                        placeholder='Subject'
                      ></input>
                      {formErrors.subject.length > 0 && (
                        <span className='errorMessage'>
                          {formErrors.subject}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows='5'
                        name='message'
                        value={this.state.message}
                        className={`form-control formInput ${
                          formErrors.message.length > 0 ? 'error' : null
                        }`}
                        onChange={this.handleChange}
                        placeholder='Your message'
                      ></textarea>
                      {formErrors.message.length > 0 && (
                        <span className='errorMessage'>
                          {formErrors.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className='submit-btn'
                    type='submit'
                    onClick={this.notify}
                  >
                    Submit
                  </button>
                </form>
                <ToastContainer
                  position='bottom-right'
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFormTest;