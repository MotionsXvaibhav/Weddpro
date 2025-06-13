import Hero from "../components/Hero";
import FilmsGallery from "../components/FilmsGallery";
import SVGMap from "../components/SVGMap";
import ScrollImage from "../components/ScrollImage";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <div className="font-sans ">
        <Hero />
     <FilmsGallery />
     <ScrollImage />
     <SVGMap /> 
     <Testimonials />
         </div>
  );
}