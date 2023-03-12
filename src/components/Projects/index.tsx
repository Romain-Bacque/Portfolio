import { useState, useEffect } from "react";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import Slider from "../UI/Slider";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(false);

  const HandleItemClick = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    setTransition(false);

    timer = setTimeout(() => {
      setTransition(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.home}
    >
      <div
        className={`${classes.projects} ${
          transition ? classes["projects--alt"] : ""
        }`}
      >
        <Slider onClick={HandleItemClick} animate={false} height={40} />
      </div>
    </motion.section>
  );
};

export default Projects;
