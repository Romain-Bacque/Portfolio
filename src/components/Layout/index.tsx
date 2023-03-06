import Footer from "../Footer";
import Header from "../Header";
import { LayoutProps } from "./type";
import classes from "./style.module.scss";
import { useLocation } from "react-router-dom";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const homePagePath = "/";

  return (
    <>
      <Header />
      <main
        className={`${classes.main} ${
          location.pathname !== homePagePath && classes["main--alt"]
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
