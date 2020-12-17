import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/projects/Kotli High School (17).JPG"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/projects/Chitral Double Story (10).JPG"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/projects/Chitral Double Sotry (5).JPG"),
    altText: "...",
    caption: "",
  },
];

function OurWork() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section text-center" id="carousel">
        <Container>
          <div className="title">
            <h2 className="title text-center">Our work</h2>
          </div>
          <Row className="justify-content-center">
            <Col md="10">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5 className="font-weight-bold shadow-sm">
                          {item.caption}
                        </h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="fas fa-chevron-left font-weight-bold shadow-lg"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="fas fa-chevron-right font-weight-bold shadow-lg"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="space-50"></div>
              <Button className="" color="info" href="our-work">
                View all projects
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurWork;
