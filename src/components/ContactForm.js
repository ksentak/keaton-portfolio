import React from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash/fp';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
require('dotenv').config();

const ContactForm = () => {
	const { register, errors, handleSubmit, reset } = useForm();

	const toastifySuccess = () => {
		toast('Form sent!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback success'
		});
	};

	const onSubmit = (data) => {
		// Send form email
		let templateParams = {
			name: data.name,
			email: data.email,
			subject: data.subject,
			message: data.message
		};
		emailjs.send(
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			templateParams,
			process.env.REACT_APP_USER_ID
		);
		reset();
		toastifySuccess();
	};

	return (
		<div className='ContactForm'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 text-center'>
						<div className='contactForm'>
							<form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
								{/* Row 1 of form */}
								<div className='row formRow'>
									<div className='col-6'>
										<input
											type='text'
											name='name'
											ref={register({
												required: true,
												pattern: /^[A-Za-z]+$/i
											})}
											className='form-control formInput'
											placeholder='Name'
											noValidate
										></input>
										{_.get('name.type', errors) === 'required' && (
											<p>Please enter your name</p>
										)}
										{_.get('name.type', errors) === 'pattern' && (
											<p>Please use alphabetical characters only</p>
										)}
									</div>
									<div className='col-6'>
										<input
											type='email'
											name='email'
											ref={register({
												required: true,
												pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
											})}
											className='form-control formInput'
											placeholder='Email address'
											noValidate
										></input>
										{errors.email && <p>Please enter a valid email address</p>}
									</div>
								</div>
								{/* Row 2 of form */}
								<div className='row formRow'>
									<div className='col'>
										<input
											type='text'
											name='subject'
											ref={register({
												required: true,
												maxLength: 75
											})}
											className='form-control formInput'
											placeholder='Subject'
										></input>
										{_.get('subject.type', errors) === 'required' && (
											<p>Please enter a subject</p>
										)}
										{_.get('subject.type', errors) === 'maxLength' && (
											<p>Subject cannot exceed 75 characters</p>
										)}
									</div>
								</div>
								{/* Row 3 of form */}
								<div className='row formRow'>
									<div className='col'>
										<textarea
											rows='5'
											name='message'
											ref={register({
												required: true
											})}
											className='form-control formInput'
											placeholder='Message'
										></textarea>
										{errors.message && <p>Please enter a message</p>}
									</div>
								</div>
								<button className='submit-btn' type='submit'>
									Submit
								</button>
							</form>
						</div>
						<ToastContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
