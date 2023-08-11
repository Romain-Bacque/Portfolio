import { useEffect, useState } from "react";
import { ArrowUpShort } from "react-bootstrap-icons";
import classes from "./style.module.scss";

const ScrollToTopButton: React.FC = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ArrowUpShort
      className={`${classes["scroll-up"]} ${
        backToTopButton ? classes["active"] : ""
      }`}
      onClick={scrollTop}
    />
  );
};

export default ScrollToTopButton;
