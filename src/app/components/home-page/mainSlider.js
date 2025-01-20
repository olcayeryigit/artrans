"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TextSection from "./textsection";

const MainSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="h-[32rem] bg-black"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Yatak Odası Tekstili"
                description="Nevresim takımları, yorganlar ve daha fazlasıyla huzurlu bir uyku. Rahatlığın ve şıklığın buluştuğu yer!"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src="/images/yatak-tekstili.png"
                alt="Yatak Odası Tekstili"
                className="w-full h-40 md:h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Rahat ve Şık Ev Giyim"
                description="Konforu ve şıklığı bir araya getiren koleksiyonlarımızı keşfedin."
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src="/images/ev-giyim.png"
                alt="Ev Giyim"
                className="w-full h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Salon İçin Şık Perde Modelleri"
                description="Evinizi tamamlayan zarif perde seçeneklerimize göz atın."
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src="/images/salon-perdeleri.jpg"
                alt="Salon Perdeleri"
                className="w-full h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center p-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Sevdikleriniz İçin Özel Hediye Seçenekleri"
                description="Ev tekstilinden hediye fikirleriyle sevdiklerinizi mutlu edin."
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src="/images/hediye-secenekleri.jpg"
                alt="Hediye Seçenekleri"
                className="w-full h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
