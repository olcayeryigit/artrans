import "./globals.css";
import Header from "./components/root/header/header";
import Footer from "./components/root/footer/footer";
import { Montserrat } from 'next/font/google'; // Montserrat fontunu ekle
import Trendyol from "./components/root/link/Trendyol";

// Fontu yapılandır
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Farklı ağırlıkları kullanabilirsiniz
});
export const metadata = {
  title: "Artrans Pazarlama | E-Ticaret ve Ticari Satış",
  description: "Artrans Pazarlama, kaliteli e-ticaret ürünleri ve güvenli alışveriş imkanı sunar. Hemen keşfedin!",
  keywords: "e-ticaret, ticari satış, online alışveriş, Artrans Pazarlama",
  robots: "index, follow",
  openGraph: {
    description: "Artrans Pazarlama, kaliteli e-ticaret ürünleri ve güvenli alışveriş imkanı sunar. Hemen keşfedin!",
    url: "https://www.artranspazarlama.com",
    site_name: "Artrans Pazarlama",
  },
  instagram: {
    title: "Artrans Pazarlama | E-Ticaret ve Ticari Satış",
    description: "Artrans Pazarlama, kaliteli e-ticaret ürünleri ve güvenli alışveriş imkanı sunar. Hemen keşfedin!",
    url: "https://www.instagram.com/artrans.pazarlama"  // Instagram profil URL'sini buraya ekleyin
  },
  whatsapp: {
    title: "Artrans Pazarlama | E-Ticaret ve Ticari Satış",
    description: "Artrans Pazarlama, kaliteli e-ticaret ürünleri ve güvenli alışveriş imkanı sunar. Hemen keşfedin!",
    url: "https://wa.me/905301533475",  // Telefon numarasını WhatsApp üzerinden mesajlaşma başlatacak şekilde ekleyin
  }
  ,
  url: "https://www.artranspazarlama.com",
  site_name: "Artrans Pazarlama",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artrans Pazarlama",
    "url": "https://www.artranspazarlama.com",
    "sameAs": [
      "https://www.instagram.com/artrans.pazarlama",
    ]
  }

};


export default function RootLayout({ children }) {
  const jsonLd = JSON.stringify(metadata.structuredData);

  return (
    <html lang="tr">
       <head>
        <script type="application/ld+json">{jsonLd}</script>
        <link rel="canonical" href="https://www.artranspazarlama.com" />

      </head>
      <body className={`${montserrat.className}`}>
        <Header />
        <Trendyol/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
