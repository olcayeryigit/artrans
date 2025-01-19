import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Bize Ulaşın</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-8">
          İletişim bilgilerimiz üzerinden bize ulaşabilirsiniz.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* İletişim Bilgileri */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            İletişim Bilgilerimiz
          </h3>
          

          {/* Sosyal Medya ve Diğer Linkler */}
          <div className="space-y-4 mt-6">
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+901234567890"
                  className="text-gray-700 text-lg hover:text-gray-800"
                >
                  <i className="fas fa-phone-alt mr-2"></i>Telefon: +90 123 456 78 90
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/901234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-lg hover:text-gray-800"
                >
                  <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/artranspazarlama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-lg hover:text-gray-800"
                >
                  <i className="fab fa-instagram mr-2"></i>Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://artranspazarlama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-lg hover:text-gray-800"
                >
                  <i className="fas fa-link mr-2"></i>Web Sitesi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Video */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-72">
  <Image src="/video/1.gif" fill className="object-cover"/>
</div>



      </div>
    </section>
  );
};

export default Contact;
