import { useState, useEffect } from "react";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import Slider from "../UI/Slider";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const HandleItemClick = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    setIsToggled(false);

    timer = setTimeout(() => {
      setIsToggled(true);
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
          isToggled ? classes["projects--alt"] : ""
        }`}
      >
        <Slider onClick={HandleItemClick} animate={false} height={40} />
        {isToggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={classes["projects__description-container"]}
          >
            <div className="description">
              <h3 className="description-title">Lorem ipsum dolor</h3>
              <div  className="description-container">
                <p className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  molestiae et consectetur ipsum. Ipsa commodi modi, ipsum ad
                  fuga est nobis sed, pariatur vero accusantium veniam quibusdam
                  possimus quo laudantium!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
