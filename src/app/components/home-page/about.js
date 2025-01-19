import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 mt-44 pt-20">
      <div className="container mx-auto flex">
        {/* Dikey Artrans Pazarlama */}
        <div className="text-4xl  h-8 w-60 font-bold text-gray-800 opacity-10 transform -rotate-90 mt-36 ">
          ARTRANS PAZARLAMA
        </div>
        <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Hakkımızda - Artrans Pazarlama
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Artrans Pazarlama olarak, ev tekstili ve ev ürünleri sektöründe kalite,
          şıklık ve fonksiyonelliği bir araya getiren bir marka olma hedefiyle
          faaliyet gösteriyoruz. Kurulduğumuz günden bu yana, evleri daha
          sıcak, konforlu ve estetik bir yaşam alanına dönüştürmek için
          çalışıyoruz.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Ev tekstili ve dekorasyonun yaşam kalitesine katkı sağladığına
          inanıyoruz. Bu nedenle, ürün portföyümüzde şık perdelerden yumuşak
          havlulara, rahat yatak örtülerinden zarif masa örtülerine kadar geniş
          bir yelpazede seçenekler sunuyoruz. Her bir ürünümüz, hem modern hem
          de klasik tasarım anlayışına hitap eden detaylarla özenle
          hazırlanmıştır.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
