import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const carouselItems = [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      location: "MARRAKECH » JUNE 2024",
      title: "HEK & JAY",
      description:
        "ech, with a song like no other; Lakh nd the deep bond between a...",
    },
    {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "BALI » NOVEMBER 2022",
      title: "MILAN SAI & SURAJ",
      description: "A beautiful beach wedding under the sunset...",
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "VALENCIA » OCTOBER 2022",
      title: "KARISHMA & NAMIR",
      description: "Traditional ceremony in the heart of Spain...",
    },
  ];

  useEffect(() => {
    const startCarousel = () => {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
    };

    startCarousel();
    return () => clearInterval(slideInterval.current);
  }, [carouselItems.length]);

  const goToSlide = (index) => {
    clearInterval(slideInterval.current);
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    clearInterval(slideInterval.current);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToNext = () => {
    clearInterval(slideInterval.current);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="pt-8 md:pl-[280px]" style={{ backgroundColor: "#BB2200", minHeight: "100vh" }}>
      {/* Search bar */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <input
          type="search"
          placeholder="Search your story..."
          className="w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Rounded container for Hero */}
      <div className="max-w-7xl mx-auto bg-black rounded-3xl overflow-hidden shadow-xl">
        {/* Hero Section */}
        <section className="relative h-[75vh] overflow-hidden rounded-3xl">
          {/* Carousel */}
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {item.type === "video" ? (
                  <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
              </div>
            ))}
          </div>

          {/* Main Content - bottom left */}
          <div className="relative z-10 flex flex-col items-start justify-end h-full px-6 pb-12 text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              We'd love to
              <br />
              hear your story!
            </h1>
          </div>

          {/* Navigation Arrows - desktop */}
          <div className="hidden md:block">
            <button
              onClick={goToPrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 transition-all"
              aria-label="Next slide"
            >
              <FiChevronRight size={28} />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="md:hidden">
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              aria-label="Next slide"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Film Info Overlay */}
          <div className="absolute bottom-28 left-6 right-6 text-left text-white z-10 max-w-xl px-4">
            <p className="text-sm uppercase tracking-widest mb-1">
              {carouselItems[currentSlide].location}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-2">
              {carouselItems[currentSlide].title}
            </h2>
            <p className="max-w-2xl text-sm md:text-base">
              {carouselItems[currentSlide].description}
            </p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2 z-10">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
