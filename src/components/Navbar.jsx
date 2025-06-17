import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 fixed top-0 left-0 w-full z-50 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">MediConnect + </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
           <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/booking" className="hover:text-yellow-300">Booking</Link></li>
          <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
          <li><Link to="/appointments" className="hover:text-yellow-300">Appointments</Link></li>
         
        </ul>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 px-6 py-4 space-y-3 font-medium">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/booking" onClick={toggleMenu}>Booking</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
<li><Link to="/appointments" onClick={toggleMenu}>Appointments</Link></li>
          
        </ul>
      )}
    </nav>
  );
}

