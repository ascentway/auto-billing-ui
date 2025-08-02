import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X'; // Twitter icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-0">
      <div className="flex flex-col items-center">
        <p className="text-sm mb-2">Made with ❤️ by Team Auto Billing System</p>
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
      </div>
    </footer>
  );
};

export default Footer;
