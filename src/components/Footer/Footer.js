/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/admin/dashboard">Defigram</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/admin/dashboard"> About Us</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/admin/dashboard"> Blog</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <Link to="/admin/dashboard">Defigram</Link> for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
