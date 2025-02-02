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
  title: "Artrans Pazarlama",
  description: "Artrans Pazarlama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        <Trendyol/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
