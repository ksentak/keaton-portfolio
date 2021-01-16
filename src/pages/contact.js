import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
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
