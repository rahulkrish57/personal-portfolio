import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} width={400} height={400} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="d-flex">
        <a
          href={`https://www.github.com/rahulkrish57/${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          {" "}
          <GitHubIcon />
        </a>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          {" "}
          <LaunchIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
