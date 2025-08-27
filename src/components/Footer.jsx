import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
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
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400"
          >
            <FaTwitter />
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
