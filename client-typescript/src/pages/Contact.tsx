import ContactInfo from '../components/ContactInfo';
// import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact:React.FC = () => {
	return (
		<div className='Contact'>
			<ContactInfo />
			{/* <ContactForm /> */}
			<Footer />
		</div>
	);
};

export default Contact;