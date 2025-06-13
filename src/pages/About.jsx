import React from "react";
import { motion } from "framer-motion";
import dsicon from "../assets/icon/dsicon.png"; // rotating camera icon
import teamImg from "../assets/images/team.jpg";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const teamMembers = [

  {
    name: "Sarthak Mishra",
    role: "CEO, Founder & Cinematographer",
    bio: "The creative soul behind WEDDPRO. With a love for candid beauty and timeless moments, Sarthak turns every wedding into a masterpiece.",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/team/sarthak.jpg",
  },
  {
    name: "Priyanka Patra",
    role: "Creative Director",
    bio: "From styling to storytelling, Priyanka vision brings grace and depth to every frame, adding a poetic touch to your special day",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/team/priyanka.jpg",
  },
  {
    name: "Gautam Moharana",
    role: "Administrator & Photo Editor",
    bio: "The silent force keeping everything in order.Where the magic unfolds in post.Gautam polishes each photo with care, preserving emotion while adding that signature WEDDPRO touch",
    image: "https://res.cloudinary.com/dio1peean/image/upload/v1749752077/GOUTAM_MOHARANA_yiel1m.jpg",
  },
  {
    name: "Sanjit Kumar",
    role: "Lead Photographer",
    bio: "A master of motion and mood, Sanjit captures weddings like films — rich in emotion, rhythm, and romance",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/team/sanjit.jpg",
  },
  {
    name: "Prakash Barik",
    role: "Senior Photographer",
    bio: "With years of experience and a heart tuned to human emotion, Prakash is the eye that sees beyond the obvious. His calm presence and mastery behind the camera bring grace and authenticity to every shot",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/team/prakash.jpg",
  },
  {
    name: "Bheem",
    role: "Lead Cinematographer",
    bio: "The maestro of motion. Bheem brings cinematic magic to every wedding film, blending drama, romance, and rhythm into unforgettable visual stories",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/team/bheem.jpg",
  },
  {
    name: "Sambit das",
    role: "Editor & Designer",
    bio: "The final magic-maker, Sambit turns raw shots into dreamy memories with her expert touch in color and detail",
    image: "https://res.cloudinary.com/dio1peean/image/upload/v1749752076/SAMBIT_DAS_hhnlxm.jpg",
  },
  {
    name: "Nishikant",
    role: "Production Manager",
    bio: "The backbone of every shoot. From timelines to technicals, Nishikant ensures everything flows smoothly behind the scenes",
    image: "https://res.cloudinary.com/dio1peean/image/upload/v1749752077/NISIKANT_MOHAPATRA_txtvf7.jpg",
  },
  {
    name: "Sai Abhishek Rath",
    role: "HR Manager",
    bio: "The heart of our people. Sai nurtures the team spirit, ensuring every soul here feels inspired, valued, and aligned",
    image: "https://res.cloudinary.com/dio1peean/image/upload/v1749752077/SAI_ABHISEK_RATH_whnrlw.jpg",
  }


  // ...rest same as before
];

export default function About() {
  return (
    <section className="md:ml-64 bg-yellow-50 text-gray-800 min-h-screen">

      {/* Hero Image fills full viewport */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={teamImg}
          alt="Our Team"
          className="absolute top-0 left-0 w-full h-full object-contain md:object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />
      </div>

      {/* Content below hero with padding */}
      <div className="pt-10 px-6 md:px-24">

        {/* Rotating Camera Icon */}
        <img
          src={dsicon}
          alt="Camera Icon"
          className="w-24 h-24 mx-auto mb-4 animate-spin-slow"
          style={{ animationTimingFunction: "linear" }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-2"
        >
          WEDDPRO.INDIA
        </motion.h1>

       
        {/* About Company with your exact content formatting */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="max-w-4xl mx-auto px-4 text-gray-700 text-center"
>
  {/* Section Title */}
  <h2 className="text-2xl md:text-3xl font-bold uppercase text-pink-600 tracking-wide mb-6">
    Our Work Defines Us
  </h2>

  {/* Tagline */}
  <p className="text-lg md:text-xl italic font-medium text-pink-700 mb-10">
    “Your Big Day, Our Big Passion.”
  </p>

  {/* Paragraphs with visual rhythm */}
  <p className="text-base md:text-lg mb-6 leading-relaxed">
    We <span className="font-semibold text-pink-600">Weddpro</span>, your premier wedding photography brand based in <span className="font-semibold">Cuttack, Odisha</span>. Since our inception in <span className="font-semibold">2017</span>, we have dedicated ourselves to capturing the magic of weddings across India with an artistic touch and unmatched professionalism.
  </p>

  <p className="text-base md:text-lg mb-6 leading-relaxed">
    Our team specializes in turning fleeting moments into eternal memories — blending <em>traditional elegance</em> with <em>contemporary flair</em> to create stunning visual narratives. At <span className="font-semibold text-pink-600">Weddpro</span>, we understand that every couple’s story is unique, and we strive to reflect that individuality in every shot.
  </p>

  <p className="text-base md:text-lg mb-6 leading-relaxed">
    From the intricate details of a bride’s gown to the joyful celebrations of a reception, our goal is to document each precious moment with <span className="font-semibold">authenticity</span> and <span className="font-semibold">creativity</span>.
  </p>

  <p className="text-base md:text-lg leading-relaxed">
    With a portfolio that spans diverse cultures and locales, we are committed to delivering exceptional photography services tailored to your needs — ensuring your wedding day is preserved beautifully for years to come.
  </p>
</motion.div>


        {/* Team Members */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-5 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow"
              />
              <h3 className="text-xl font-semibold text-pink-700">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20 text-center text-gray-700 px-4"
>
  <h2 className="text-2xl font-bold mb-8">Contact Us</h2>

  {/* Buttons Row */}
  <div className="flex flex-wrap justify-center gap-4 mb-6">
    {/* WhatsApp */}
    <a
      href="https://wa.me/917735214860"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow hover:bg-green-600 transition"
    >
      <FaWhatsapp size={18} /> WhatsApp
    </a>

    {/* Call */}
    <a
      href="tel:7735214860"
      className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full shadow hover:bg-pink-600 transition"
    >
      <FaPhoneAlt size={16} /> Call Us
    </a>

    {/* Email */}
    <a
      href="mailto:weddprosb@gmail.com"
      className="flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full shadow hover:bg-blue-600 transition"
    >
      <FaEnvelope size={16} /> Email
    </a>
  </div>

  {/* Location Text */}
  <p className="mb-4 font-medium">
    📍 Netaji Nagar, Near Shani Temple, Madhupatna, Cuttack 753010, Odisha
  </p>

  {/* Map */}
  <div className="mt-6 max-w-3xl mx-auto">
    <iframe
      title="WEDDPRO Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.208361390438!2d85.8669633!3d20.470044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1912064c66cfe3%3A0xe580d69c3aaf268b!2sNetaji%20Nagar%2C%20Madhupatna%2C%20Cuttack%2C%20Odisha%20753010!5e0!3m2!1sen!2sin!4v1718039212345"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow"
    ></iframe>
  </div>
</motion.div>
      </div>
    </section>
  );
}
