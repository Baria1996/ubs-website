/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#" target="_blank">
                link 1
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                link 2
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                link 3
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright text-right" id="copyright">
          © {new Date().getFullYear()}, UBS Group Of Companies
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
