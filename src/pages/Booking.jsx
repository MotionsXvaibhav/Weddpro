import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingBg1 from "../assets/images/BookingBg1.jpg";
import FloatingHearts from "../components/FloatingHearts";
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';



const Booking = () => {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];
  const [currentScene, setCurrentScene] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hearts, setHearts] = useState([]);

  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    phone: "",
    email: "",
    venue: "",
    location: "",
    guests: "",
    describe: "",
    story: "",
    rituals: "",
  });

  useEffect(() => {
    sectionRefs[currentScene]?.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentScene]);

  useEffect(() => {
    if (showHearts) {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 20,
      }));
      setHearts(newHearts);
    } else {
      setHearts([]);
    }
  }, [showHearts]);

  const goToNextScene = () => {
    if (currentScene < sectionRefs.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const handleSubmit = async () => {
  const templateParams = {
    brideName: formData.brideName,
    groomName: formData.groomName,
    phone: formData.phone,
    email: formData.email,
    venue: formData.venue,
    location: formData.location,
    guests: formData.guests,
    describe: formData.describe,
    story: formData.story,
    rituals: formData.rituals,
  };

  try {
    await emailjs.send(
      "service_ysxsd0e",       // Your Service ID
      "template_c0wsr2v",      // Your Template ID
      templateParams,
      "HrUynW6Fi0-55a1lH"      // Your Public Key
    );

    setShowHearts(true);
    setShowToast(true);
    setTimeout(() => {
      setShowHearts(false);
      setShowToast(false);
      setCurrentScene(3); // Thank you scene
    }, 3000);
  } catch (error) {
    toast.error("Failed to send booking. Please try again.");
    console.error("EmailJS Error:", error);
  }
};


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto&display=swap');

        html, body, #root {
          margin: 0; padding: 0; height: 100%;
          overflow-x: hidden;
          font-family: 'Roboto', sans-serif;
          background: #fff7f5;
          color: #4a4a4a;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.3);
            opacity: 0;
          }
        }

        .heading-font {
          font-family: 'Playfair Display', serif;
          color: #b03a3a;
          text-shadow: 1px 1px 4px rgba(176, 58, 58, 0.6);
          letter-spacing: 1px;
        }

        button {
          box-shadow: 0 6px 12px rgba(176, 58, 58, 0.25);
          transition: all 0.3s ease;
          font-family: 'Playfair Display', serif;
        }

        button:hover {
          box-shadow: 0 8px 20px rgba(176, 58, 58, 0.4);
          transform: translateY(-3px) scale(1.05);
        }

        input, textarea {
          border: 2px solid #e5c6c6;
          background: #fff0f0;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 1rem;
          color: #4a4a4a;
          font-family: 'Roboto', sans-serif;
          transition: border-color 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #b03a3a;
          background: #ffeaea;
          box-shadow: 0 0 8px rgba(176, 58, 58, 0.4);
        }

        section {
          scroll-snap-align: start;
          padding-left: 20vw;
          padding-right: 5vw;
        }

        @media (max-width: 767px) {
          section.scene1 {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
          }

          section.scene1 > div.relative {
            max-width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            margin: 0 auto !important;
            text-align: center !important;
          }

          section.scene1 h1.heading-font,
          section.scene1 p,
          section.scene1 button {
            margin-left: auto !important;
            margin-right: auto !important;
            text-align: center !important;
          }
        }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(176, 58, 58, 0.85) 0%,
            rgba(240, 128, 128, 0.5) 50%,
            transparent 100%
          );
        }

        .form-group {
          position: relative;
          margin-bottom: 1.75rem;
          text-align: left;
        }

        .form-group input,
        .form-group textarea {
          padding: 16px;
          border-radius: 10px;
          border: 2px solid #e5c6c6;
          background: #fff0f0;
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
          color: #4a4a4a;
          transition: border-color 0.3s ease;
          width: 100%;
          box-sizing: border-box;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #b03a3a;
          background: #ffeaea;
          box-shadow: 0 0 8px rgba(176, 58, 58, 0.4);
        }

        .form-group label {
          position: absolute;
          top: 16px;
          left: 20px;
          color: #b03a3a;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1rem;
          pointer-events: none;
          transition: all 0.3s ease;
          background: #fff0f0;
          padding: 0 6px;
          border-radius: 4px;
        }

        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -10px;
          left: 16px;
          font-size: 0.8rem;
          color: #7a2525;
          font-weight: 700;
          background: #fff7f5;
        }

        .toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #b03a3a;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 1000;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          animation: fadeInOut 3s ease-in-out forwards;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          10% { opacity: 1; transform: translateX(-50%) translateY(0); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
      `}</style>

      <div className="w-screen min-h-screen flex flex-col overflow-x-hidden">
        {showToast && <div className="toast">Booking submitted successfully!</div>}

        {showHearts && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {hearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute select-none text-[#b03a3a]"
                style={{
                  left: `${heart.left}%`,
                  animation: `floatUp ${heart.animationDuration}s linear forwards`,
                  fontSize: `${heart.size}px`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        )}
        {/* Scene 1 */}
{currentScene === 0 && (
  <section
    ref={sectionRefs[0]}
    className="scene1 min-h-screen bg-cover bg-center flex items-center justify-center relative"
    style={{ backgroundImage: `url(${BookingBg1})` }}
  >
    <div className="absolute inset-0 hero-overlay" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 max-w-6xl w-full px-6 mx-auto text-center md:text-left"
    >
      <motion.h1
        variants={itemVariants}
        className="heading-font text-5xl md:text-8xl font-bold mb-8 leading-tight"
      >
        Let’s Plan Your Perfect Day
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-2xl mb-12 max-w-lg mx-auto md:mx-0 drop-shadow-sm"
        style={{ color: "#f9eaea" }}
      >
        Book your wedding shoot in just a few elegant steps
      </motion.p>
      <motion.button
        variants={itemVariants}
        onClick={() => setCurrentScene(1)}
        className="bg-[#b03a3a] text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-[#7a2525] focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Begin Booking
      </motion.button>
    </motion.div>
  </section>
)}
{/* Scene 2 */}
{currentScene === 1 && (
  <section
    ref={sectionRefs[1]}
    className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff1f1] via-[#ffe4e4] to-[#ffeaea] px-6 py-16 w-full md:pl-[280px] overflow-hidden"
  >
    {/* Floating hearts background */}
    <FloatingHearts count={30} />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto relative z-10"
    >
      <h2 className="text-4xl font-serif text-[#b03a3a] mb-10 tracking-wide text-center">
        Tell Us About You
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex-1 mb-10 md:mb-0 p-6 rounded-lg shadow-md bg-[#fff4f4]">
          <h3 className="text-2xl font-semibold mb-6 text-[#b03a3a]">
            Couple & Contact Details
          </h3>
          {["brideName", "groomName", "phone", "email"].map((field) => (
            <div className="form-group" key={field}>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                id={field}
                placeholder=" "
                value={formData[field]}
                onChange={handleChange}
                required
              />
              <label htmlFor={field}>
                {field === "brideName"
                  ? "Bride's Name"
                  : field === "groomName"
                  ? "Groom's Name"
                  : field === "phone"
                  ? "Phone No"
                  : "Email"}
              </label>
            </div>
          ))}
        </div>

        <div className="flex-1 p-6 rounded-lg shadow-md bg-[#fff4f4]">
          <h3 className="text-2xl font-semibold mb-6 text-[#b03a3a]">
            Wedding Details & Story
          </h3>
          {[
            ["venue", "Venue"],
            ["location", "Location"],
            ["guests", "No of Guests"],
            ["describe", "Describe Each Other"],
            ["story", "What's Your Story?"],
            ["rituals", "Your Rituals"],
          ].map(([id, label]) => (
            <div className="form-group" key={id}>
              {["describe", "story", "rituals"].includes(id) ? (
                <textarea
                  id={id}
                  rows="3"
                  placeholder=" "
                  value={formData[id]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  type={id === "guests" ? "number" : "text"}
                  id={id}
                  placeholder=" "
                  value={formData[id]}
                  onChange={handleChange}
                  required
                />
              )}
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Validation + Next Button */}
      <button
        type="button"
        onClick={() => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\d{10}$/;

          if (!formData.email || !emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email.");
            return;
          }

          if (!formData.phone || !phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
          }
          setCurrentScene(2);
        }}
        className="mt-10 bg-[#b03a3a] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#7a2525] focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Next
      </button>
    </motion.div>
  </section>
)}
{/* Scene 3 */}
{currentScene === 2 && (
  <section
    ref={sectionRefs[2]}
    className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#fff1f1] via-[#ffe4e4] to-[#ffeaea] px-2 sm:px-4 py-2 md:ml-64 overflow-hidden"
  >
    {/* Floating Hearts Background */}
    <FloatingHearts count={20} />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-5xl h-full flex flex-col justify-between z-10"
    >
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#b03a3a] mb-6 text-center">
          Review & Submit
        </h2>

        <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <h4 className="text-sm text-gray-500 font-medium">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                </h4>
                <p className="text-lg text-gray-800 whitespace-pre-wrap break-words">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between mt-10 gap-6">
            <button
              onClick={() => setCurrentScene(1)}
              className="bg-white border border-[#b03a3a] text-[#b03a3a] px-10 py-3 rounded-full font-semibold shadow-sm hover:bg-[#fceeee] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-100"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#b03a3a] text-white px-10 py-3 rounded-full font-semibold shadow-md hover:bg-[#7a2525] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Submit Booking
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)}
 {/* Scene 4 */}
{currentScene === 3 && (
  <section
    ref={sectionRefs[3]}
     className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#fff1f1] via-[#ffe4e4] to-[#ffeaea] px-2 sm:px-4 py-2 md:ml-64 overflow-hidden"  
  >
     {/* Floating Hearts Background */}
    <FloatingHearts count={20} />
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-lg mx-auto text-center md:text-left"
    >
      <h2 className="text-4xl font-serif text-[#b03a3a] mb-6 tracking-wide">
        Thank You!
      </h2>
      <p>Your booking has been received. We will contact you shortly.</p>
    </motion.div>
  </section>
)}
      </div>
    </>
  );
};
export default Booking;