import React from 'react';
import { FaCarSide, FaUserCircle } from 'react-icons/fa';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <Navbar bg="black" expand="lg"  >
      <Navbar.Brand  className = "text-white brand" href="/">
        CarConnect
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-nav justify-content-space-between text-white" >
          <NavLink className='text-white a1' href="/home">RIDE</NavLink>
          <NavLink className='text-white a1' href="/about">ABOUT</NavLink>
          <NavLink className='text-white a1' href="/contact">CONTACT</NavLink>
        </Nav>
        <Nav className="ml-auto navbar-nav justify-content-space-between ">
          <NavLink className='text-white a1 me-4' href="/login">
          <FaCarSide className="text-white  a1 me-1" /> Manage Bookings</NavLink>
          <NavLink className='text-white a1' href="/signup">
            <FaUserCircle className='text-whiteme-1'/>  Log in | Register</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
