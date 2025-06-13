import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import dsicon from "../assets/icon/dsicon.png"; // PNG icon import

const categories = ["Recents", "All", "Classics", "Celebrities"];

const films = [
  {
    id: 1,
    title: "HEK & JAY",
    location: "MARRAKECH",
    date: "JUNE 2024",
    description: "A film with a song like no other; love and bond captured beautifully.",
    category: "Recents",
    media: [
      "https://res.cloudinary.com/dio1peean/image/upload/v1748643240/CP1Img3_gqy9oa.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1748643239/CP1Img1_rt71xk.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1748643233/CP1Img4_btz6hb.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1748643233/CP1Img2_kweeao.jpg",
    ],
  },
  {
    id: 2,
    title: "TUISHA & NAM",
    location: "GOA",
    date: "JAN 2023",
    category: "Classics",
    media: [
      "https://res.cloudinary.com/dio1peean/image/upload/v1749749530/CP3Img2_by9dmp.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1748643238/CP3Img1_hulk1d.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749749723/CP3Img3_dlvkxu.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749749924/CP3Img4_b41s4r.jpg",
    ],
  },
  {
    id: 3,
    title: "KARISHMA & NAMIR",
    location: "BALI",
    date: "OCT 2022",
    category: "Celebrities",
    media: [
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750119/CP4Img1_d8ihwj.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750102/CP4Img3_klmc51.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750102/CP4Img2_xi5dvt.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750101/CP4Img4_l38prf.jpg",
    ],
  },
  {
    id: 4,
    title: "SHIV & DIYA",
    location: "JAIPUR",
    date: "FEB 2023",
    category: "Recents",
    media: [
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750343/CP2Img2_tzdhlk.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750343/CP2Img3_qywixm.jpg",
      "https://res.cloudinary.com/dio1peean/image/upload/v1749750343/CP2Img1_lr9kzl.jpg",
    ],
  },
];

export default function FilmsGallery() {
  const [activeCategory, setActiveCategory] = useState("Recents");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredFilms =
    activeCategory === "All"
      ? films
      : films.filter((film) => film.category === activeCategory);

  const openModal = (film, index = 0) => {
    setSelectedFilm(film);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFilm(null);
    setSelectedIndex(0);
    setModalOpen(false);
  };

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const sentence = "You Say 'I Do', We Frame It Forever".split(" ");

  return (
    <section className="py-8 bg-[#BB2200] text-white md:pl-64 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <img
          src={dsicon}
          alt="Camera Icon"
          className="w-24 h-24 mx-auto mb-4 animate-spin-slow"
          style={{ animationTimingFunction: "linear" }}
        />

        <motion.h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-serif mb-10"
          initial="hidden"
          animate={controls}
        >
          {sentence.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: index * 0.2 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-10 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                activeCategory === category
                  ? "bg-white text-[#BB2200] border-white"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-[#BB2200]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => openModal(film)}
              className="bg-white text-black rounded overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={film.media[0]}
                alt={film.title}
                className="w-full h-64 object-cover group-hover:brightness-75 transition"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm mb-1">
                  {film.location} » {film.date}
                </p>
                <h3 className="text-xl font-serif">{film.title}</h3>
                {film.description && (
                  <p className="text-sm mt-2">{film.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedFilm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-3xl font-bold z-50 hover:text-red-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            <Swiper
              navigation
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
              initialSlide={selectedIndex}
              className="w-full h-[70vh]"
            >
              {selectedFilm.media.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
