import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coimbatore Institute of Engineering and Technology, Coimbatore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Electrical and Electronics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graphic Designer - AG Resources India Pvt Ltd (Personiv)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Coimbatore, TN, India
          </h4>
          <p>
            {" "}
            Conceptualized and crafted digital and print advertisements,
            ensuring alignment with brand guidelines and marketing objectives.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - TalenQ Software India Pvt Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, KA, India
          </h4>
          <p>
            Spearheaded development of EmployQ, an innovative recruitment
            platform leveraging Generative AI for personalized career solutions,
            covering frontend, backend, and deployment aspects.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
