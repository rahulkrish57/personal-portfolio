import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
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
      <a
        href={`https://www.github.com/rahulkrish57/${project.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {" "}
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
