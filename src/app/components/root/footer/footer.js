"use client";
import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Sol Bölüm: Telif Hakkı ve İletişim */}
          <div>
            <p className="text-sm">&copy; 2025 Şirket Adı. Tüm Hakları Saklıdır.</p>
            <p className="text-sm">İletişim: <a href="mailto:info@ornek.com" className="text-blue-400 hover:text-blue-300">info@ornek.com</a></p>
          </div>

          {/* Sağ Bölüm: Sosyal Medya Linkleri */}
          <div className="flex space-x-4">
            <Link  href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <i className="fab fa-facebook-f text-xl"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <i className="fab fa-twitter text-xl"></i>
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Gizlilik Politikası</Link> | 
            <Link href="/terms-of-service" className="text-blue-400 hover:text-blue-300"> Kullanım Şartları</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
