import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0A2647] text-white font-helvetica fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       {/* Logo */}
      <Link to="/" className="flex items-center text-2xl font-bold font-gilroy">
        <img src={logo} alt="MEUN Logo" className="w-10 h-10 mr-2" />
        <span className="text-2xl font-bold text-white">MEUN <span className='text-yellow-300 text-base ml-6 font-thin'>Meet Everything U Need</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#F4A261] transition-colors">
            Home
          </Link>
          <Link to="/services" className="hover:text-[#F4A261] transition-colors">
            Services
          </Link>
          <Link to="/about" className="hover:text-[#F4A261] transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#F4A261] transition-colors">
            Contact
          </Link>
          <Link to="/dashboard" className="hover:text-[#F4A261] transition-colors">
            Dashboard
          </Link>
          <Link to="/login" className="hover:text-[#F4A261] transition-colors">
            Login
          </Link>
          <Link to="/signup" className="btn-cta">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0A2647] px-4 py-4"
        >
          <Link to="/" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/services" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/about" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/dashboard" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/login" className="block py-2 hover:text-[#F4A261] transition-colors" onClick={toggleMenu}>
            Login
          </Link>
          <Link to="/signup" className="block py-2 text-center bg-[#F4A261] text-white rounded-lg hover:bg-[#E89B41] transition-colors" onClick={toggleMenu}>
            Signup
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;