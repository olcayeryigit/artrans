"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";





import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Kadın Giyim", image: "/images/products/1.png", background: "#33B5FF" },
  { id: 2, name: "Erkek Giyim", image: "/images/products/2.png", background: "#FF5733" },
  { id: 3, name: "Çocuk Giyim", image: "/images/products/3.png", background: "#FF33A6" },
  { id: 4, name: "Ev Tekstili", image: "/images/products/4.png", background: "#33FF57" },
  { id: 5, name: "Mutfak Gereçleri", image: "/images/products/5.png", background: "#FFC300" },
  { id: 6, name: "Banyo Tekstili", image: "/images/products/6.png", background: "#DA33FF" },
  { id: 7, name: "Takı ve Aksesuar", image: "/images/products/7.png", background: "#FF5733" },
  { id: 8, name: "Mobilya", image: "/images/products/8.png", background: "#5856CB" },
];

const ProductCard = ({ product }) => {
  return (
    <div className="mx-2 md:mx-0 md:w-full mx-auto relative rounded-lg overflow-hidden text-center group">
      <img
        src={product.image}
        alt={`${product.name} Ürünü`}
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), ${product.background})`,
          zIndex: 1,
        }}
      ></div>
      
      <h3
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white z-10"
        style={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        {product.name}
      </h3>
      <Link
        href="https://www.trendyol.com/magaza/artrans-pazarlama-m-1081382?sst=0"
        className="w-full h-full flex items-center gap-4 justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-12 group-hover:translate-y-0 bg-black/80 z-40"
      >
        <span>Ürünleri Gör</span>
      </Link>
    </div>
  );
};

const Products = () => {
  return (
    <div id="products" className=" py-4 md:py-10 relative md:absolute md:top-[27.5rem] z-50 container md:left-1/2 transform md:-translate-x-1/2 w-full px-4 md:px-0">
       <Head>
        <title>Ürünlerimiz - Artrans Pazarlama</title>
        <meta name="description" content="Artrans Pazarlama'dan kaliteli ürünler, hemen keşfedin!" />
        <meta name="keywords" content="e-ticaret, ürünler, online alışveriş, kadın giyim, erkek giyim" />
        <meta property="og:title" content="Ürünlerimiz - Artrans Pazarlama" />
        <meta property="og:description" content="Artrans Pazarlama'dan kaliteli ürünler, hemen keşfedin!" />
      
      </Head>
      <h2 className="text-4xl font-extrabold text-center text-black md:text-white mb-4 md:mb-12">Ürünlerimiz</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
       
         
        
          1024: { slidesPerView: 4 },  
          768: { slidesPerView: 2 }, 
          640: { slidesPerView: 1 },  

        }}
        className="container mx-auto "
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 md:left-0 right-4 md:right-0 z-10 flex justify-between  md:px-4 mt-6">
        {/* Previous Button */}
        <div className="custom-prev w-10 h-10 md:w-12 md:h-12 flex justify-center items-center cursor-pointer bg-[#ACFC03] hover:bg-[#BAFF3F] border-black border-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"></path>
          </svg>
        </div>
        {/* Next Button */}
        <div className="custom-next w-10 h-10 md:w-12 md:h-12 flex justify-center items-center cursor-pointer bg-[#ACFC03] hover:bg-[#BAFF3F] border-black border-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Products;
