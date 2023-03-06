import { useLocation } from "react-router-dom";
import NavBar from "../UI/NavBar";
import classes from "./style.module.scss";

function Header() {
  const location = useLocation();

  const headerClass = `${classes.header} ${
    location.pathname !== "/" ? classes["header--alt"] : ""
  }`;

  return (
    <header className={headerClass}>
      <NavBar />
    </header>
  );
}

export default Header;
