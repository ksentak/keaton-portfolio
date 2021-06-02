import ContactInfo from '../components/contactinfo';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <div className='Contact'>
        <ContactInfo />
        <ContactForm />
        <Footer />
      </div>
    </Layout>
  );
};

export default Contact;
