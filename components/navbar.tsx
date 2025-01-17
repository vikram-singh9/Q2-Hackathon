'use client';

import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: 'Ceramics', href: '/ceramics' },
    { name: 'Checkout', href: '/checkout' },
    { name: 'Chairs', href: '/chairs' },
    { name: 'Register', href: '/register' },
    { name: 'About', href: '/about' },
    { name: 'Cart', href: '/cart' },
  ];

  return (
    <div className="p-4 w-full h-auto sticky top-0 z-50 bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        {/* Logo */}
        <Link href={'/'} className="text-[#2A254B] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </Link>

        {/* Icons for large screens */}
        <div className="hidden md:flex gap-4">
          <Link href={'/shopping'}>
            <IoCartOutline size={25} className="text-[#2A254B]" />
          </Link>
          <IoIosContact size={25} className="text-[#2A254B]" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="flex items-centernp gap-4 md:hidden">
          <CiSearch size={25} className="text-[#2A254B]" />
          <button
            className="text-2xl focus:outline-none z-30"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      <hr />

      {/* Navigation Links */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:w-auto md:translate-x-0 md:bg-transparent z-20`}
      >
        <nav>
          <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-7 md:gap-8 text-gray-700 text-base">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-black transition">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
