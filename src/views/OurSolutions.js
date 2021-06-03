import React from "react";
import ProductCard from "../components/ProductCard";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

const items = [
  {
    image: require("assets/img/products/SANDWICH PANELS (3).jpeg"),
    description: [
      "EPS Sandwich panel is composite two layers pre-painted steel sheets and (EPS) polystyrene hard foams. Used as roof, wall and cold room materials. EPS foam sandwich panel also be called Foam or Polystyrene Sandwich panel widely use for Prefab Houses, Commercial Centers, Warehouses, Farm houses, Industrial partitioning, Multi Storey Buildings, Hospitals, Porta Cabins etc",
      <br></br>,
      "Thickness : 50mm, 75mm, 100mm",
      <br></br>,
      "Width : 955 mm",
      <br></br>,
      "Length : As per client required",
      <br></br>,
      "Color Roof : Red/Blue",
    ],
  },
  {
    image: require("assets/img/products/SANDWICH PANELS (13).jpeg"),
    description: [
      "Color steel sandwich panel roof is a common product in the current building materials, not only can be very good flame retardant and environmentally friendly and efficient.  sandwich panels have two layers of metal panels and middle layer of polymer insulation core pressed. With easy installation, light weight, environmentally friendly and efficient features. Moreover, the closed-cell molecular structure used in the filling system can prevent condensation of water vapor.",
      <br></br>,
      "Thickness : 50mm, 75mm, 100mm",
      <br></br>,
      "Width : 955 mm",
      <br></br>,
      "Length : As per client required",
      <br></br>,
      "Color Roof : Blue",
    ],
  },
  {
    image: require("assets/img/products/SANDWICH PANELS (5).jpeg"),
    description: [
      "EPS Sandwich Wall Panel (Plain & Bearing line)",
      <br></br>,
      "Thickness : 50mm, 75mm & 100mm",
      <br></br>,
      "Width : 955 mm & 1155mm",
      <br></br>,
      "Length : As per client required",
      <br></br>,
      "Color : White",
      <br></br>,
      "Density of Thermopore : 15 kg/m3 - 22 kg/m3",
      <br></br>,
      "Delivery Time :  According to Order Quantity",
    ],
  },
  {
    image: require("assets/img/products/shed.jpg"),
    description: [
      "Designing , Fabrication & Erection ( a complete team of Experts ) Faster Production , Precise Fabrication, Quick  Erection & Construction. 5000-10,000 Sqft erected within 15-20 working days.",
    ],
  },
  {
    image: require("assets/img/products/setup.jpg"),
    description: [
      "Our Team completed this exceptional office on turnkey basis in record time! From design to complete office set up. (civil , fabrication , erection and electrical wiring fitting). Call us today to have an  for your Office, Residence and Warehouses by our experienced team.",
    ],
  },
  {
    image: require("assets/img/products/office.jpg"),
    description: [
      "Placing supervisors and management close to operations in a warehouse can increase productivity and help improve communication. PortaFab Modular Building Systems offer many options for inplant warehouse offices. Offices can be built on top of mezzanines to increase storage while improving visibility.",
      <br></br>,
      "By choosing a modular building system over traditional construction, one minimizes the disruption to the warehouse during construction and offices can be re-purposed, moved or renovated in the future.",
    ],
  },
];

function OurSolutions() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <div className="space-50"></div>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
                <h2 className="title text-left mt-0 pt-0">Our solutions</h2>
                <p className="text-muted font-weight-normal">
                  We invite you to explore our variety of cost efficient and
                  quality designed structures, built for a lifetime to endure
                  severe weather conditions. Select a standard building type or
                  customize your structure dependent upon your requirements and
                  visionary style!
                </p>
              </Col>
              <Col lg="6" md="12">
                <img
                  className="img-raised rounded"
                  src={require("assets/img/solutions.png")}
                  alt="..."
                />
              </Col>
            </Row>
            <div className="section">
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md="12" key={index}>
                      <ProductCard
                        heading={item.heading}
                        image={item.image}
                        description={item.description}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default OurSolutions;
