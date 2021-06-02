import React from 'react';
import Banner from '../components/banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Home = () => (
  <Layout>
    <SEO title='Home' />
    <div className='Home'>
      <Banner />
    </div>
  </Layout>
);

export default Home;
