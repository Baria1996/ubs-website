import React from "react";

// reactstrap components
// import { Button } from "reactstrap";

function ProjectCard(props) {
  return (
    <div className="team-player mb-4 pb-4">
      <a className="text-decoration-none" href={props.link}>
        <img
          alt="..."
          className="img-fluid img-raised rounded"
          src={props.image}
        ></img>
        <h4 className="title text-black mt-0">{props.heading}</h4>
        {/* <p className="category text-info">{props.subheading}</p> */}
        <p className="description font-weight-normal">{props.description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
