import Image from "next/image";
import Products from "./components/home-page/products";
import About from "./components/home-page/about";
import Contact from "./components/home-page/contact";
import MainSlider from "./components/home-page/mainSlider";

export default function Home() {
  return (
    <div className="">
<MainSlider/>
<Products/>
<About/>
<Contact/>
    </div>
  );
}
