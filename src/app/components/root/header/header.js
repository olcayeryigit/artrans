"use client";
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-12" />
      </div>

      {/* Navigasyon Menüsü */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-800 font-bold hover:text-blue-500">Anasayfa</Link>
          </li>
          <li>
            <a href="/about" className="text-gray-800 font-bold hover:text-blue-500">Hakkında</a>
          </li>
          <li>
            <Link href="/products" className="text-gray-800 font-bold hover:text-blue-500">Ürünler</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 font-bold hover:text-blue-500">İletişim</Link>
          </li>
        </ul>
      </nav>

      {/* Sosyal Medya Linkleri ve Telefon */}
      <div className="flex items-center space-x-6">
        {/* Telefon */}
        <Link href="tel:+1234567890" className="text-gray-800 font-bold hover:text-blue-500">
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
