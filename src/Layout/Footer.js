import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div class="text-center lg:text-left">
        <div class="text-gray-700 text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
          © 2023 Copyright:
          <Link class="text-gray-800" to='/'> Photo Gallery App</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;