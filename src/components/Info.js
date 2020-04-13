import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className='Info'>
        <div className='container'>
          {/* Row 1 */}
          <div className='row'>
            <div className='col-12'>
              <h1>About Me</h1>
              <div className='about-underline'></div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row'>
            <div className='col-6'>{/* image here */}</div>
            <div className='col-6'>
              <p className='about-text'>
                A Full-Stack Developer and graduate of both Rutgers University
                and the University of Pennsylvania LPS Coding Bootcamp looking
                to contribute long-term organizational value through my
                knowledge of both front and back-end technologies. Well-versed
                in various web technologies such as JavaScript, Node.js,
                React.js, MongoDB and MySQL used to generate fully functional
                websites, web applications, and databases. Equipped to work
                collaboratively in a team setting to ensure optimal results for
                user and technology centered designs.
              </p>
              <button>Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
