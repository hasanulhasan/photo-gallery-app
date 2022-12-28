import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-4'>
      <div className="text-center lg:text-left rounded-3xl">
        <div className="text-gray-700 text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright:
          <Link className="text-gray-800" to='/'> Photo Gallery App</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;