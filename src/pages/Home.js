import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Rahulkrishnan</h2>
        <div className="prompt text-jsutify">
          <p> Experienced Full Stack Developer proficient in MERN stack.</p>

          <span>
            <a
              href="https://www.linkedin.com/in/rahulkrish57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a
              href="mailto:rahulkrishdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
          </span>
          <span>
          <a
              href="https://www.github.com/rahulkrish57"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub />
            </a>
          </span>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Nextjs, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB,
              MySQL, AWS S3, EC2, EKS, ECR
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
