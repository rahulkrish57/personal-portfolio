import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
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
              <LinkedInIcon />
            </a>
          </span>
          <span>
            <a
              href="mailto:rahulkrishdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </a>
          </span>
          <span>
          <a
              href="https://www.github.com/rahulkrish57"
              target="_blank"
              rel="noopener noreferrer"
            >
            <GithubIcon />
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
