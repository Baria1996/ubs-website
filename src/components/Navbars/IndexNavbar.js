import React from "react";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-white");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="index" id="navbar-brand">
              <img
                className="navbar-logo"
                src={require("assets/img/main-logo-sm.jpg")}
                alt="..."
              />
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="our-esteemed-clients">
                  <p>Our Esteemed Clients</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="who-we-are">
                  <p>Who We Are</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="what-we-do">
                  <p>What We Do</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="our-solutions">
                  <p>Our Solutions</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="our-work">
                  <p>Our Work</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button className="nav-link btn-primary" href="contact-us">
                  Contact Us
                </Button>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/UBSBusinessGroup"
                  target="_blank"
                  id="facebook-tooltip"
                  className="btn-facebook"
                >
                  <i
                    className="fab fa-facebook btn-facebook"
                    style={{ opacity: "1" }}
                  ></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
