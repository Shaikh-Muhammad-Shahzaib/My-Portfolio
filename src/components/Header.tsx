"use client";

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHome, FaUser, FaGraduationCap, FaBriefcase, FaFolderOpen, FaCode, FaEnvelope, FaBars, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-8 px-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <FaBars size={24} className="text-gray-400" />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-4 md:space-x-4 bg-black md:bg-transparent md:relative left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 z-20`}
        >
          <Link href="#intro" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link href="#about" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaUser size={20} />
            <span>About</span>
          </Link>
          <Link href="#education" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaGraduationCap size={20} />
            <span>Education</span>
          </Link>
          <Link href="#experience" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaBriefcase size={20} />
            <span>Experience</span>
          </Link>
          <Link href="#projects" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaFolderOpen size={20} />
            <span>Projects</span>
          </Link>
          <Link href="#skills" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaCode size={20} />
            <span>Skills</span>
          </Link>
          <Link href="#contact" className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-300">
            <FaEnvelope size={20} />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <a href="http://linkedin.com/in/shaikh-muhammad-shahzaib-94b1a0221" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.facebook.com/shahzaib.sheikh.7399?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://github.com/Shaikh-Muhammad-Shahzaib" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={20} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=923482406345&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com/shahzaib8404/?igsh=MXBzMnVmdWVxcnVqMw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
