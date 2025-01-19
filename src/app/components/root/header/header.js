"use client";
import Link from 'next/link';
import React from 'react';
import Logo from '../../common/logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black">
      {/* Logo */}
      <div className="flex items-center">
        <Logo 
          src="/logo/logo.png" 
          height="85px" 
          alt="Logo" 
          className="object-contain"
        />
      </div>

      {/* Navigasyon Menüsü */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link 
              href="/" 
              className="text-white font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Anasayfa
            </Link>
          </li>
          <li>
            <a 
              href="/about" 
              className="text-white font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Hakkımızda
            </a>
          </li>
          <li>
            <Link 
              href="/products" 
              className="text-white font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Ürünler
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-white font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              
              İletişim
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sosyal Medya Linkleri ve Telefon */}
      <div className="flex items-center space-x-6">
        {/* Telefon */}
        <div className='flex gap-3 items-center'
          >
          
          <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24"><g fill="none" stroke="#ACFC03" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={64} strokeDashoffset={64} d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate><animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform></path><path strokeDasharray={4} strokeDashoffset={4} d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"></animate></path></g></svg>    
          
                <div className='flex flex-col gap-2 text-xl text-white font-semibold
          '> 
          <Link href="#" className='hover:text-[#ACFC03] transition duration-300 ease-in-out'>+90 530 153 34 75</Link>


          <Link href="#" className='hover:text-[#ACFC03] transition duration-300 ease-in-out'>+90 539 366 1709 </Link>

          </div>

          </div>

        {/* Sosyal Medya Linkleri */}
        <div className="flex space-x-4">
          <Link 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
            <i className="fab fa-facebook-f text-xl"></i>
          </Link>
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-pink-600 transition duration-300 ease-in-out">
            <i className="fab fa-instagram text-xl"></i>
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-blue-400 transition duration-300 ease-in-out">
            <i className="fab fa-twitter text-xl"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
