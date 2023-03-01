import NavBar from "../UI/NavBar";
import classes from "./style.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <NavBar />
    </header>
  );
}

export default Header;
