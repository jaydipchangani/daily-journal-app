import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div class="flex bg-blue-300 justify-around items-center p-4">
        <p class="text-lg"> Add it. Edit it. Delete it. Regret it later.</p>
        <div className="mb-4 md:mb-0">
          <p className="text-lg ">© 2025 All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:jaydipchangani2@gmail.com?subject=Daily Journal&body=This email from Daily Journal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
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
        </div>
      </div>
    </>
  );
}

export default Footer;
