"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="home" className="bg-black">
      <div className='container mx-auto flex justify-between items-center py-4 px-8'>
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-extrabold bg-gradient-to-r from-[#ACFC03] via-[#EFFFCC] to-[#F8FFEB] text-transparent bg-clip-text text-xl md:text-2xl">
            ARTRANS PAZARLAMA
          </Link>
        </div>

        {/* Navigasyon Menüsü (Desktop & Mobile) */}
        <nav>
          <ul className={`bg-white md:bg-black text-black md:text-white lg:flex space-x-2 text-center md:text-start md:space-x-6  ${isMenuOpen ? 'flex flex-col gap-2 md:gap-0 absolute top-16 left-0 w-full bg-black py-4 z-[999999]' : 'hidden'}`}>
            <li>
              <Link href="#home" onClick={closeMenu} className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
                Anasayfa
              </Link>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
                Hakkımızda
              </a>
            </li>
            <li>
              <Link href="#products" onClick={closeMenu} className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMenu} className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sosyal Medya Linkleri ve Telefon */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-6">
          {/* Sosyal Medya Linkleri */}
          <div className="flex space-x-2 md:space-x-8">
            <Link href="https://wa.me/905301533475" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
              {/* WhatsApp Icon */}
            </Link>

            <Link href="https://www.instagram.com/artrans.pazarlama" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition duration-300 ease-in-out">
              {/* Instagram Icon */}
            </Link>
          </div>

          {/* Telefon */}
          <div className="flex flex-col gap-1 text-md text-white font-semibold">
            <Link href="tel:+905301533475" className="hover:text-[#ACFC03] transition duration-300 ease-in-out">
              <span>Anıl Çaylar: </span>
              <span className='ps-4'>+90 530 153 34 75</span>
            </Link>
            <Link href="tel:+905393661709" className="hover:text-[#ACFC03] transition duration-300 ease-in-out">
              <span>Mahir Çayan Çaylar: </span>
              <span className='ps-4'>+90 539 366 17 09</span>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              // Çarpı (Kapama) ikonu
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger ikonu
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menü */}
      <div className="md:hidden absolute top-20 z-50 left-8 flex flex-col gap-2 text-xs text-white font-semibold">
        <Link href="tel:+905301533475" onClick={closeMenu} className="hover:text-[#ACFC03] transition duration-300 ease-in-out">
          <span>Anıl Çaylar: </span>
          <span className='ps-4'>+90 530 153 34 75</span>
        </Link>
        <Link href="tel:+905393661709" onClick={closeMenu} className="hover:text-[#ACFC03] transition duration-300 ease-in-out">
          <span>Mahir Çayan Çaylar: </span>
          <span className='ps-4'>+90 539 366 17 09</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
