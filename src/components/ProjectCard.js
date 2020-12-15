import React from "react";

// reactstrap components
// import { Button } from "reactstrap";

function ProjectCard(props) {
  return (
    <div className="team-player">
      <img alt="..." className="img-fluid img-raised" src={props.image}></img>
      <h4 className="title">{props.heading}</h4>
      {/* <p className="category text-info">{props.subheading}</p> */}
      <p className="description font-weight-normal">{props.description}</p>
      {/* <Button
        className="btn-icon btn-round"
        color="info"
        href={props.link}
        target="_blank"
      >
        <i className="fab fa-facebook-square"></i>
      </Button> */}
    </div>
  );
}

export default ProjectCard;
