import { Button } from "react-bootstrap";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Slider from "../UI/Slider";
import myCv from "../../assets/images/CV.png";

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
            Développeur web diplômé. Je suis passionné par le
            code et toujours motivé à apprendre. Polyvalent, mon aisance à
            assimiler de nouvelles connaissances me permet de progresser
            rapidement dans mes projets.
          </p>
          <div className={classes["home__button-container"]}>
            <Button
              className={`${classes["home__button"]} ${classes["home__button--gray"]}`}
              variant="light"
            >
              <NavLink className={classes["home__button-link"]} to="/projects">
                Mes projets
              </NavLink>
            </Button>
            <Button
              className={`${classes["home__button"]} ${classes["home__button--white"]}`}
              variant="outlined"
            >
              <a
                className={classes["home__button-link"]}
                download="CV - Romain Bacque.jpg"
                href={myCv}
                target="_blank"
                rel="noreferrer"
              >
                Mon CV
              </a>
            </Button>
          </div>
        </div>
        <Slider size="sm" />
      </div>
    </motion.section>
  );
};

export default Home;
