import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import dsicon from "../assets/icon/dsicon.png";
import weddlogoblk from "../assets/images/weddlogoblk.png"; // Import logo

export default function Testimonials() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  const [isHeartModalOpen, setHeartModalOpen] = useState(false);
  const toggleHeartModal = () => setHeartModalOpen((prev) => !prev);

  const sentence = "Hear From Our Happy Couples".split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen bg-yellow-50 p-6 md:ml-64"
      aria-label="Testimonials"
    >
      <div className="flex justify-center mb-4">
        <img
          src={dsicon}
          alt="DS Icon"
          className="w-24 h-24 animate-spin-slow"
          style={{ animationTimingFunction: "linear" }}
        />
      </div>

      <motion.h2
        ref={headingRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="text-center mb-4 md:mb-6 flex flex-wrap justify-center"
        style={{
          color: "#BC2203",
          fontSize: "2.75rem",
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
        }}
      >
        {sentence.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {/* Heart button below heading (Mobile only) */}
      <div className="md:hidden flex flex-col items-center relative mb-6">
        <div className="relative flex flex-col items-center">
          <button
            onClick={toggleHeartModal}
            aria-label="Open heart message"
            className="w-20 h-20 flex items-center justify-center focus:outline-none animate-bounce"
          >
            <svg
              viewBox="0 0 100 90"
              className="w-full h-full text-pink-500 drop-shadow-lg"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              style={{ filter: "drop-shadow(0 0 6px #f472b6)" }}
            >
              <path d="M50 82s-30-18-44-39C-5 23 12 0 33 12c7 4 10 10 17 20 7-10 10-16 17-20 21-12 38 11 27 31-14 21-44 39-44 39z" />
            </svg>
          </button>

          <div className="mt-2 px-3 py-1 bg-pink-100 text-pink-700 text-xs font-serif rounded shadow-md">
            Note From Us
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-[80vh]">
        <div className="absolute top-6 right-6">
          <WhatsAppTestimonial />
        </div>
        <div className="absolute top-6 left-6 max-w-sm w-[320px]">
          <GoogleReview />
        </div>
        <div className="absolute bottom-2 left-6 max-w-sm w-[320px] mb-6">
          <EmailTestimonial />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[520px] h-[460px] flex items-center justify-center p-6 text-center">
            <svg
              viewBox="0 0 100 90"
              className="absolute w-full h-full text-pink-300"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M50 82s-30-18-44-39C-5 23 12 0 33 12c7 4 10 10 17 20 7-10 10-16 17-20 21-12 38 11 27 31-14 21-44 39-44 39z"
                fill="currentColor"
              />
            </svg>
            <p className="relative z-10 text-pink-900 font-semibold text-xs leading-snug max-w-[70%]">
              At Weddpro, we believe in the power of love stories and the memories
              we create through our photography. Our testimonials page features
              heartfelt reviews from couples we've had the honor of working with.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile testimonial cards below heart */}
      <div className="md:hidden flex flex-col items-center">
        <div className="mb-4 w-full flex justify-center">
          <GoogleReview />
        </div>
        <div className="mb-4 w-full flex justify-center">
          <WhatsAppTestimonial />
        </div>
        <div className="w-full flex justify-center">
          <EmailTestimonial />
        </div>
      </div>

      {/* Modal for Heart Message */}
      {isHeartModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          onClick={toggleHeartModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-xs w-full shadow-lg relative flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "Georgia, serif" }}
          >
            <button
              onClick={toggleHeartModal}
              aria-label="Close modal"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
            >
              ✕
            </button>

            <img
              src={weddlogoblk}
              alt="Weddpro logo"
              className="w-28 h-28 object-contain rounded-full shadow"
            />

            <p className="text-pink-900 font-semibold text-center text-base leading-relaxed">
              At Weddpro, we believe in the power of love stories and the memories
              we create through our photography. Our testimonials page features
              heartfelt reviews from couples we've had the honor of working with.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}


// Your WhatsAppTestimonial, GoogleReview, EmailTestimonial components remain unchanged


function WhatsAppTestimonial() {
  return (
    <section className="relative bg-yellow-50 p-4" aria-label="WhatsApp style testimonial">

      <div className="phone-frame relative bg-black rounded-3xl shadow-2xl w-[320px] h-[600px] flex flex-col">
        <div className="phone-top-bar flex justify-between items-center px-4 py-2 text-white text-xs font-semibold bg-[#075E54] rounded-t-3xl select-none">
          <div>9:41</div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>100%</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
            </svg>
          </div>
        </div>

        <div className="whatsapp-header flex items-center px-4 py-3 bg-[#075E54] text-white">
          <div className="rounded-full bg-green-500 w-10 h-10 mr-3 border-2 border-white flex items-center justify-center font-bold text-lg">
            C
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-lg leading-none">Client</div>
            <div className="text-xs text-green-300">online</div>
          </div>
          <button aria-label="Call" className="ml-auto" style={{ filter: "invert(1)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a9 9 0 009 9v-4a5 5 0 00-5-5H3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l4-4m0 0l-4-4m4 4H9" />
            </svg>
          </button>
        </div>

        <div
          className="chat-window flex-1 px-4 py-6 bg-[#ECE5DD] overflow-hidden flex flex-col space-y-3"
          style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          <div className="chat-message max-w-[75%] bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 shadow-sm">
            Hey! Loved the photos! 😍
            <div className="text-xs text-gray-400 mt-1 text-right select-none">12:32 PM</div>
          </div>

          <div className="chat-message max-w-[75%] self-end bg-[#dcf8c6] rounded-tl-xl rounded-bl-xl rounded-br-xl p-3 shadow-sm">
            Thank you so much! Glad you liked them.
            <div className="text-xs text-gray-500 mt-1 text-right select-none">12:35 PM</div>
          </div>

          <div className="chat-message max-w-[75%] bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-3 shadow-sm">
            The wedding day photos were amazing! You captured every moment perfectly.
            <div className="text-xs text-gray-400 mt-1 text-right select-none">12:40 PM</div>
          </div>

          <div className="chat-message max-w-[75%] self-end bg-[#dcf8c6] rounded-tl-xl rounded-bl-xl rounded-br-xl p-3 shadow-sm">
            That means a lot, thank you! It was a pleasure working with you both.
            <div className="text-xs text-gray-500 mt-1 text-right select-none">12:43 PM</div>
          </div>
        </div>

        <div className="chat-input-bar bg-white border-t border-gray-300 px-4 py-3 flex items-center rounded-b-3xl select-none">
          <button className="text-gray-500 mr-3" aria-label="Emoji">
            😊
          </button>
          <input
            type="text"
            disabled
            placeholder="Message"
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500 cursor-not-allowed"
          />
          <button className="text-green-600 ml-3" aria-label="Send">
            ➤
          </button>
        </div>
      </div>
    </section>
  );
}

function GoogleReview() {
  const stars = ["full", "full", "full", "full", "half"];

  return (
    <div
      className="bg-white rounded-lg shadow-md border border-gray-300 p-5"
      style={{ fontFamily: "Roboto, Arial, sans-serif" }}
      aria-label="Google review"
    >
      <div className="flex items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          className="mr-2"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.1 0 5.7 1.1 7.4 2.9l5.5-5.5C32.6 3.9 28.5 2 24 2 14.9 2 7 9.9 7 19s7.9 17 17 17c7.6 0 13.9-5.3 14.9-12.5H24v-4z"
          />
        </svg>
        <span className="font-semibold text-lg text-gray-800">Google Review</span>
      </div>

      <div className="flex items-center space-x-1 mb-2">
        {stars.map((star, idx) => {
          if (star === "full") {
            return (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            );
          } else if (star === "half") {
            return (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <defs>
                  <linearGradient id="halfGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#halfGrad)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
                />
              </svg>
            );
          }
          return null;
        })}
        <span className="ml-2 font-semibold text-gray-700 text-sm">4.5</span>
      </div>

      <p className="text-gray-800 text-base leading-relaxed mb-3">
        “Absolutely wonderful experience! The photographer was professional and
        captured every special moment beautifully.”
      </p>

      <div className="text-sm text-gray-600 font-semibold">- Anjali K.</div>
    </div>
  );
}

function EmailTestimonial() {
  return (
    <div
      className="bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden"
      aria-label="Email testimonial"
    >
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-xs text-gray-600">
        <p>
          From: <span className="font-medium">anita.mehra@gmail.com</span>
        </p>
        <p>Subject: Thank You for the Wedding Memories!</p>
      </div>

      <div className="px-4 py-3 text-sm text-gray-800 leading-relaxed">
        Hi there,
        <br />
        <br />
        We just wanted to say thank you for the incredible photos. You truly
        captured the spirit of our day and gave us memories we’ll cherish
        forever.
        <br />
        <br />
        Warm regards,
        <br />
        Anita & Raj
      </div>
    </div>
  );
}

