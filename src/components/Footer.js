import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="mailto:rahulkrishdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.github.com/rahulkrish57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahulkrish57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p> &copy; {new Date().getFullYear()} rahulkrishnan.dev</p>
    </div>
  );
}

export default Footer;
