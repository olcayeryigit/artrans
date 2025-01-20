"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../common/logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="home" className="flex justify-between items-center p-4 bg-black">
      {/* Logo */}
      <div className="flex items-center">
        <div className="hidden md:inline">
          <Logo
          src="/logo/logo.png"
          height="85px"
          alt="Logo"
        />
    </div>
        

    <div className="md:hidden">
          <Logo
          src="/logo/logo.png"
          height="50px"
          alt="Logo"
        />
    </div>

      </div>

 
      {/* Navigasyon Menüsü (Desktop & Mobile) */}
      <nav>
        <ul className={`bg-white  md:bg-black text-black md:text-white lg:flex space-x-2 text-center md:text-start md:space-x-6  ${isMenuOpen ? 'flex flex-col gap-2 md:gap-0  absolute top-20 left-0 w-full bg-black py-4 z-[999999]' : 'hidden'}`}>
          <li>
            <Link 
              href="#home" 
              className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Anasayfa
            </Link>
          </li>
          <li>
            <a 
              href="#about" 
              className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Hakkımızda
            </a>
          </li>
          <li>
            <Link 
              href="#products" 
              className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              Ürünler
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="font-bold hover:text-[#ACFC03] transition duration-300 ease-in-out">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sosyal Medya Linkleri ve Telefon */}
      <div className="hidden md:flex items-center space-x-2  md:space-x-6">
        {/* Sosyal Medya Linkleri */}
        <div className="flex space-x-2 md:space-x-8">
          <Link 
            href="https://wa.me/905301533475" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          >
         <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1faf38"></stop><stop offset="100%" stopColor="#60d669"></stop></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#f9f9f9"></stop><stop offset="100%" stopColor="#fff"></stop></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path></svg> 

          </Link>

          <Link 
            href="https://www.instagram.com/artrans.pazarlama/profilecard/?igsh=NXluZWF4OHByMDRm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-pink-600 transition duration-300 ease-in-out"
          >
                     <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect><rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path><defs><radialGradient id="skillIconsInstagram0" cx={0} cy={0} r={1} gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#fd5"></stop><stop offset={0.1} stopColor="#fd5"></stop><stop offset={0.5} stopColor="#ff543e"></stop><stop offset={1} stopColor="#c837ab"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx={0} cy={0} r={1} gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771c8"></stop><stop offset={0.128} stopColor="#3771c8"></stop><stop offset={1} stopColor="#60f" stopOpacity={0}></stop></radialGradient></defs></g></svg>

          </Link>
        </div>

        {/* Telefon */}
        <div className="flex flex-col gap-2 text-md text-white font-semibold">
          <Link
            href="tel:+905301533475"
            className="hover:text-[#ACFC03] transition duration-300 ease-in-out"
          >
     <span>Anıl Çaylar: </span>  
           <span className='ps-4'>+90 530 153 34 75</span>  
          </Link>
          <Link
            href="tel:+905393661709"
            className="hover:text-[#ACFC03] transition duration-300 ease-in-out"
          >
                 <span>Mahir Çayan Çaylar: </span>  

            <span className='ps-4'>+90 539 366 1709</span>  

          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-xs md:text-md text-white font-semibold md:hidden">
          <Link
            href="tel:+905301533475"
            className="hover:text-[#ACFC03] transition duration-300 ease-in-out"
          >
            +90 530 153 34 75
          </Link>
          <Link
            href="tel:+905393661709"
            className="hover:text-[#ACFC03] transition duration-300 ease-in-out"
          >
            +90 539 366 1709
          </Link>
        </div>
             {/* Mobile Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18"></path></svg>
        </button>
      </div>

    </header>
  );
};

export default Header;
