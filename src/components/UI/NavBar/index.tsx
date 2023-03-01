import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import classes from "./style.module.scss";

const expand = "lg";

const NavBar: React.FC = () => {
  return (
    <Navbar className={`mb-3 ${classes.navbar}`} expand={expand}>
      <Container fluid>
        <Navbar.Brand className={classes.navbar__brand} href="/">
          Mon Portfolio
        </Navbar.Brand>
        <Navbar.Toggle  style={{ backgroundColor: 'white' }}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header color="white" closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Mon Portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="gap-4 justify-content-end flex-grow-1 pe-3">
              <NavLink
                className="navbar__link text-decoration-none"
                to="/"
              >
                Accueil
              </NavLink>
              <NavLink
                className="navbar__link text-decoration-none"
                to="#action2"
              >
                A Propos
              </NavLink>
              <NavLink
                className="navbar__link text-decoration-none"
                to="/projects"
              >
                Mes Projets
              </NavLink>
              <NavLink
                className="navbar__link text-decoration-none"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
