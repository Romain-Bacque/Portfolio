import { Button } from "react-bootstrap";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Slider from "../UI/Slider";

const Home: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.home}
    >
      <div className={classes.home__container}>
        <div className={classes["home__presentation-container"]}>
          <h2 className={classes.home__name}>
            Romain<span className={classes.home__lastname}>Bacque</span>
          </h2>
          <p className={classes.home__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ducimus fugiat nobis rem dolorem harum officiis.
          </p>
          <Button className={classes["home__projects-button"]} variant="light">
            <NavLink className={classes["home__projects-link"]} to="/projects">
              Mes projets
            </NavLink>
          </Button>
        </div>
        <Slider />
      </div>
    </motion.section>
  );
};

export default Home;
