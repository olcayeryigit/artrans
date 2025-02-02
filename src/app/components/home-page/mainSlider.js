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
        className="h-[32rem] bg-black  "
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-8 pt-24 md:py-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Yatak Odası Tekstili"
                description="Nevresim takımları, yorganlar ve daha fazlasıyla huzurlu bir uyku. Rahatlığın ve şıklığın buluştuğu yer!"
              />
            </div>
            <div className="w-full md:w-1/2 ">
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
          <div className="flex flex-col md:flex-row items-center px-8 pt-24 md:py-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Rahat ve Şık Giyim"
                description="Konforu ve şıklığı bir araya getiren koleksiyonlarımızı keşfedin."
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src="/images/giyim.png"
                alt="Giyim"
                className="w-full  h-52 md:h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-8 pt-24 md:py-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Eviniz İçin Şık Perde Modelleri"
                description="Evinizi tamamlayan zarif perde seçeneklerimize göz atın."
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src="/images/perde.png"
                alt="Perde"
                className="w-full  h-48 md:h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-8 pt-24 md:py-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Sevdikleriniz İçin Özel Hediye Seçenekleri"
                description="Ev tekstilinden hediye fikirleriyle sevdiklerinizi mutlu edin."
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src="/images/hediye.png"
                alt="Hediye Seçenekleri"
                className="w-full  h-48 md:h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
          {/* Slide 5 */}
          <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center px-8 pt-24 md:py-8 md:px-16">
            <div className="w-full md:w-1/2 pr-6">
              <TextSection
                title="Şık ve Konforlu Mobilya Seçenekleri"
                description="Evinizi tamamlayan zarif ve fonksiyonel mobilyalarla yaşam alanlarınıza estetik katın."
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src="/images/mobilya.png"
                alt="Mobilya"
                className="w-full  h-40 md:h-[19rem] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
