import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <div className='Error'>
        <div className='jumbotron jumbotron-fluid error-jumbotron'>
          <h1>
            <span className='main-color'>404</span> Page Not Found
          </h1>
          <h6>Sorry but the page you are looking for is not available.</h6>
          <Link to='/'>
            <button className='red-btn'>Return home</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
