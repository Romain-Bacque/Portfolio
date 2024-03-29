import Footer from "../Footer";
import Header from "../Header";
import { LayoutProps } from "./type";
import classes from "./style.module.scss";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  let customclasses = "";

  if (
    location.pathname !== "/" &&
    location.pathname !== "/contact" &&
    location.pathname !== "/projects"
  ) {
    customclasses = classes["main--alt1"];
  } else if (location.pathname === "/projects") {
    customclasses = classes["main--alt2"];
  } else if (location.pathname === "/contact") {
    customclasses = classes["main--alt3"];
  }

  return (
    <>
      <Header />
      <main className={`${classes.main} ${customclasses}`}>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
