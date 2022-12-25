import { Button, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Photo Gallery App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          label="Category"
          dismissOnClick={false}
        >
          <Dropdown.Item className='mx-3'>
            Tiger
          </Dropdown.Item>
          <Dropdown.Item className='mx-3'>
            Bird
          </Dropdown.Item>
          <Dropdown.Item className='mx-3'>
            Cat
          </Dropdown.Item>
          <Dropdown.Item className='mx-3'>
            Cow
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={true}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/details/:id'>About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;