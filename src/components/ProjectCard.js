import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, Row, Col } from "reactstrap";

function ProjectCard(props) {
  function importAll(r) {
    return r.keys().map(r);
  }
  // get images from the related folder
  let images = [];
  if (props.category === "containers") {
    images = importAll(
      require.context(
        "../assets/img/projects/containers",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "steel") {
    images = importAll(
      require.context(
        "../assets/img/projects/steel",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "housing") {
    images = importAll(
      require.context(
        "../assets/img/projects/housing",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "huts") {
    images = importAll(
      require.context(
        "../assets/img/projects/huts",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "mega") {
    images = importAll(
      require.context(
        "../assets/img/projects/mega",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "multistorey") {
    images = importAll(
      require.context(
        "../assets/img/projects/multistorey",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "educational") {
    images = importAll(
      require.context(
        "../assets/img/projects/educational",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "civil") {
    images = importAll(
      require.context(
        "../assets/img/projects/civil",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else if (props.category === "commercial") {
    images = importAll(
      require.context(
        "../assets/img/projects/commercial",
        false,
        /\.(png|jpe?g|svg|JPG)$/
      )
    );
  } else {
    images = [];
  }

  const [modal1, setModal1] = React.useState(false);
  return (
    <>
      <div
        className="cursor-pointer team-player mb-4 pb-4"
        onClick={() => setModal1(true)}
      >
        <img
          alt="..."
          className="img-fluid img-raised rounded img-fit-index"
          src={props.image}
        ></img>
        <h4 className="title text-black mt-0">{props.heading}</h4>
        <p className="description font-weight-normal">{props.description}</p>
      </div>
      <Modal size="lg" isOpen={modal1} toggle={() => setModal1(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal1(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">{props.heading}</h4>
        </div>
        <ModalBody>
          <Row>
            {images.map((item, index) => {
              return (
                <Col lg="4" md="6" key={index}>
                  <img
                    className="img-fluid img-fit rounded mb-4"
                    src={item}
                    alt={item.altText}
                  />
                </Col>
              );
            })}
          </Row>
        </ModalBody>
        <div className="modal-footer">
          <Button
            color="primary"
            type="button"
            onClick={() => setModal1(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ProjectCard;
