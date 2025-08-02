// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-[400px] h-[400px] bg-pink-400 opacity-30 rounded-full -top-32 -left-32 blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full bottom-10 right-10 blur-2xl"></div>

      {/* Floating Avatar/Icon */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: [ -20, 20, -20 ] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="mb-6 z-10"
      >
        <img
          src="https://img.icons8.com/wired/64/rupee.png"
          alt="rupee"
          className="w-24 h-24 drop-shadow-xl"
        />
      </motion.div>

       <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-xl max-w-2xl text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Auto-Billing System
        </h1>

         <p className="text-white/70 text-base mb-3 font-medium">
          Effortless billing, notifications, and rent management.
        </p>

        {/* Typewriter Tagline */}
        <div className="text-white/80 text-lg sm:text-xl mb-8 h-16">
          <Typewriter
            options={{
              strings: [
                "Are you tired of manually billing your tenants?",
                "Let us automate it. Fast, simple, secure.",
                "No more writing hustle. Just click & go 💡",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
              pauseFor: 2000,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition"
            >
              Register
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer
      <div className="absolute bottom-4 text-white/60 text-sm text-center flex flex-col items-center">
        <div>© {new Date().getFullYear()} Auto-Billing System</div>
        <div className="flex gap-4 mt-2">
  <a href="#" className="text-white hover:text-gray-300 transition">
    <FacebookIcon />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition">
    <XIcon />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition">
    <InstagramIcon />
  </a>
  <a href="#" className="text-white hover:text-gray-300 transition">
    <LinkedInIcon />
  </a>
</div>
      </div> */}
    </div>
  );
};
export default Home;
