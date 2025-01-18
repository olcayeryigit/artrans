"use client";
import Link from 'next/link';
import React from 'react';
import Logo from '../../common/logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black ">
      {/* Logo */}
      <div className="flex items-center">
      <Logo 
        src="/logo/logo.png" 
        height="75px" 
        alt="Logo" 
        className="object-contain"
      />
    </div>


      {/* Navigasyon Menüsü */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white font-bold hover:text-green-400">Anasayfa</Link>
          </li>
          <li>
            <a href="/about" className="text-white font-bold hover:text-green-400">Hakkında</a>
          </li>
          <li>
            <Link href="/products" className="text-white font-bold hover:text-green-400">Ürünler</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white font-bold hover:text-green-400">İletişim</Link>
          </li>
        </ul>
      </nav>

      {/* Sosyal Medya Linkleri ve Telefon */}
      <div className="flex items-center space-x-6">
        {/* Telefon */}
        <Link href="tel:+1234567890" className="text-white font-bold hover:text-green-400">
          +1 (234) 567-890
        </Link>

        {/* Sosyal Medya Linkleri */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <i className="fab fa-facebook-f text-xl"></i>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
            <i className="fab fa-instagram text-xl"></i>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
            <i className="fab fa-twitter text-xl"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
