"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Kadın Giyim", image: "/images/products/1.png", background: "#FF5733" },
  { id: 2, name: "Erkek Giyim", image: "/images/products/2.png", background: "#33B5FF" },
  { id: 3, name: "Çocuk Giyim", image: "/images/products/3.png", background: "#FF33A6" },
  { id: 4, name: "Ev Tekstili", image: "/images/products/4.png", background: "#33FF57" },
  { id: 5, name: "Mutfak Gereçleri", image: "/images/products/5.png", background: "#FFC300" },
  { id: 6, name: "Banyo Tekstili", image: "/images/products/6.png", background: "#DA33FF" },
  { id: 7, name: "Takı ve Aksesuar", image: "/images/products/7.png", background: "#FF5733" },
];

const Products = () => {
  return (
    <div id="products" className="py-10 absolute top-[28.5rem] z-50 container left-1/2 transform -translate-x-1/2 w-full">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">Ürünlerimiz</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={4}
     
        navigation={{
          nextEl: ".custom-next",  // Next butonunun class'ı
          prevEl: ".custom-prev",  // Prev butonunun class'ı
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-11/12 mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative rounded-lg overflow-hidden text-center group">
              {/* Görsel */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Üzerine Gelince Çıkan Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), ${product.background})`,
                  zIndex: 1,
                }}
              ></div>
              {/* Başlık */}
              <Image src="/logo/a.png" className="rounded-full absolute bottom-3 left-6 text-lg font-semibold text-white z-50 group-hover:bottom-20 group-hover:rotate-90 transition-all duration-800 " width={40} height={40} />

              <h3
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white z-10"
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                {product.name}
              </h3>
              {/* Ürünleri Gör Butonu */}
              <Link
href="https://www.trendyol.com/magaza/artrans-pazarlama-m-1081382?sst=0"      className="w-full h-full flex items-center gap-4 justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-12 group-hover:translate-y-0 bg-black/80 z-40"
              >
                <span> Ürünleri Gör</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between px-4 mt-6 ">
        {/* Previous Button */}
        <div className="custom-prev w-12 h-12 flex justify-center items-center cursor-pointer bg-[#ACFC03] hover:bg-[#BAFF3F] border-black border-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"></path></svg>        </div>
        {/* Next Button */}
        <div className="custom-next  w-12 h-12 flex justify-center items-center cursor-pointer bg-[#ACFC03] hover:bg-[#BAFF3F] border-black border-2  rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></path></svg>        </div>
      </div>
    </div>
  );
};

export default Products;
