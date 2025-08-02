import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-widest animate-pulse">
          Auto Billing System
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/about" className="text-white hover:underline">About Us</Link>
          <Link to="/contact" className="text-white hover:underline">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
