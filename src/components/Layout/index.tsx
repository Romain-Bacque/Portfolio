import Footer from "../Footer";
import Header from "../Header";
import { LayoutProps } from "./type";
import classes from "./style.module.scss";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
