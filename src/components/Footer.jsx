import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`flex flex-col md:flex-row justify-between items-center px-6 py-4 mt-6 shadow-inner ${
        theme === "light" ? "bg-blue-300 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Left: Quote */}
      <p className="text-lg mb-3 md:mb-0">
        Add it. Edit it. Delete it. Regret it later.
      </p>

      {/* Center: Copyright */}
      <p className="text-sm md:text-lg mb-3 md:mb-0">
        © 2025 All rights reserved.
      </p>

      {/* Right: Social Links */}
      <div className="flex space-x-6 text-2xl">
        <a
          href="mailto:jaydipchangani2@gmail.com?subject=Daily Journal&body=This email from Daily Journal"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-500"
        >
          <SiGmail />
        </a>
        <a
          href="https://linkedin.com/in/jaydip-changani"
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/jaydipchangani"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/jaydipchangani"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/jaydipchangani"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
