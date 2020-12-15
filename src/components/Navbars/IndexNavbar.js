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
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
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
        setNavbarColor("navbar-transparent");
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
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        color="primary"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="index" id="navbar-brand">
              UBS Group Of Companies
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
                <Button
                  className="nav-link btn-neutral"
                  color="primary"
                  href="contact-us"
                >
                  <p>Contact Us</p>
                </Button>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/UBSBusinessGroup"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook"></i>
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
