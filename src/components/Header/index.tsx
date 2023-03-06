import { useLocation } from "react-router-dom";
import NavBar from "../UI/NavBar";
import classes from "./style.module.scss";
import { useEffect, useState } from "react";

function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  const location = useLocation();

  const headerClass = `${classes.header} ${
    location.pathname !== "/" && scrollActive ? classes["header--alt"] : ""
  }`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={headerClass}>
      <NavBar />
    </header>
  );
}

export default Header;
