import React, { useState } from 'react';
//import './Navbar.css'
//import bodhasoftLogo from '../../Assets/BodhaSoft_logo_purple-removebg.png'

const Navbar = () => {
  const [TestName, setTestName] = useState(' C Programming Test')
  return (
    <div className="wrapper-navbar">
      <div className="navbar-logo">
        <img
          src='https://bodhasoft.com/static/img/logo.webp' 
          alt="bodahsoft-logo"
          className="bodhasoft-logo bsl"
        />
      </div>
      <div className='test-name '>
        <span className="user-text  mut">{TestName}</span>
      </div>
    </div>
  );
};

export default Navbar;
