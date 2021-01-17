import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
