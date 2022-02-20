import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
      <div className='col-12 text-center copyright mt-5'>
        <p>Copyright &copy; {new Date().getFullYear()} Keaton Sentak</p>
      </div>
    </div>
  );
};

export default Footer;
