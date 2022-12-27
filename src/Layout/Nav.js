import { Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9239/9239223.png"
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
          gradientMonochrome="teal"
        >
          <Dropdown.Item className='mx-3'>
            <Link to='/'>Animals</Link>
          </Dropdown.Item>
          <Dropdown.Item className='mx-3'>
            <Link to='/plantcategory'>Plants</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={true}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/about'>About us</Link>
        </Navbar.Link>
        {
          user?.uid ? <>
            <Navbar.Link onClick={handleLogout}>
              Logout
            </Navbar.Link>
          </>
            :
            <>
              <Navbar.Link>
                <Link to='/login'>Login</Link>
              </Navbar.Link>
            </>
        }

      </Navbar.Collapse>
    </Navbar >
  );
};

export default Nav;