import React from 'react';
import Projects from '../components/Projects';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Portfolio = () => {
  return (
    <Layout>
      <SEO title='Portfolio' />
      <div className='Portfolio'>
        <Projects />
      </div>
    </Layout>
  );
};

export default Portfolio;
