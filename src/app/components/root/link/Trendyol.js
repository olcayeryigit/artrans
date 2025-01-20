"use client";
import Link from "next/link";
import React from 'react';

function Trendyol() {
  return (
    <Link href="https://www.trendyol.com/magaza/artrans-pazarlama-m-1081382?sst=0" className="absolute bg-white  top-[31rem]  z-[9999] right-3 flex items-center gap-3 0 p-2 rounded-2xl shadow-lg z-50">
       <div className="arrow me-2">
	  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
      </div>
	  <p>Trendyol mağazamız için tıkla </p>
    

    </Link>
  );
}

export default Trendyol;
