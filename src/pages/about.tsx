import React from 'react';
import Info from '../components/info';
import Experience from '../components/experience';
import Education from '../components/education';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <SEO title='About' />
      <div className='About'>
        <Info />
        <Experience />
        <Education />
      </div>
    </Layout>
  );
};

export default About;
