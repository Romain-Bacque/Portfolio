import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./style.module.scss";

const expand = "lg";

const NavBar: React.FC = () => {
  const getClassName = (path: string) => {
    const baseClasses = `${classes.navbar__link} ${
      window.location.pathname !== "/" && classes["navbar__link--alt"]
    }`;

    return `${baseClasses} ${
      window.location.pathname === path && classes["active-link"]
    }`;
  };

  return (
    <Navbar className={`mb-3 ${classes.navbar}`} expand={expand}>
      <Container fluid>
        <Navbar.Brand className={classes.navbar__brand} href="/">
          Mon Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="top"
        >
          <Offcanvas.Header color="white" closeButton>
            <Offcanvas.Title
              style={{ fontSize: "2rem" }}
              id={`offcanvasNavbarLabel-expand-${expand}`}
            >
              Mon Portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="gap-4 justify-content-end flex-grow-1 pe-3">
              <NavLink className={getClassName.bind(null, "/")} to="/">
                Accueil
              </NavLink>
              <NavLink
                className={getClassName.bind(null, "/about")}
                to="/about"
              >
                A Propos
              </NavLink>
              <NavLink
                className={getClassName.bind(null, "/projects")}
                to="/projects"
              >
                Mes Projets
              </NavLink>
              <NavLink
                className={getClassName.bind(null, "/contact")}
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
