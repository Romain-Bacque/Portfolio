import classes from "./style.module.scss";
import { motion } from "framer-motion";
import Slider from "../UI/Slider";

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.home}
    >
      <div className={classes.projects}>
        <Slider />
      </div>
    </motion.section>
  );
};

export default Projects;
