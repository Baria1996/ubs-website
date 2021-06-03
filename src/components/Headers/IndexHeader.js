/*eslint-disable*/
import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const items = [
  {
    src: require("assets/img/main-bg-1.jpg"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/main-bg-2.jpg"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/main-bg-3.jpg"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/main-bg-4.jpg"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/main-bg-5.jpg"),
    altText: "...",
    caption: "",
  },
  {
    src: require("assets/img/main-bg-6.jpg"),
    altText: "...",
    caption: "",
  },
];

function IndexHeader() {
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
      <div className="page-header">
        <div className="page-title d-flex justify-content-center">
          <div className="page-title-inner">
            <div className="d-flex justify-content-center">
              <img src={require("assets/img/logo.png")} alt="..." />
            </div>
            <h1 className="text-primary font-weight-bold mt-4">
              <em>Group of Companies</em>
            </h1>
            <h3 className="font-weight-normal">The Construction Revolution</h3>
          </div>
        </div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          ride="carousel"
          className="main-carousel"
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
                  <h5 className="font-weight-bold shadow-sm">{item.caption}</h5>
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
      </div>
    </>
  );
}

export default IndexHeader;
