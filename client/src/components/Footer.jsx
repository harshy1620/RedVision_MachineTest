import React from "react";

import { FaLink, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div>
          <p>
            <span>&copy; 2024 iTEMR. Created by - </span>
            <a
              href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: "bold" }}
            >
              Harsh Yadav
            </a>
          </p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/harsh-yadav-b49b0a140/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://my-portfolio-react-6qb3.vercel.app/" target="_blank" rel="noreferrer">
            <FaLink size={20} />
          </a>
          <a href="https://github.com/harshy1620" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
