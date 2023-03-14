import classes from "./style.module.scss";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.notFound}
    >
      <div>
        <h3 className={classes["notFound__title"]}>
          404<span className={classes["notFound__title-dot"]}>.</span>
        </h3>
        <p className={classes["notFound__description"]}>
          Tu t'es trompé d'endroit !
        </p>
      </div>
      <Button size="lg" className={classes["notFound__home-button"]} variant="light">
        <NavLink className={classes["notFound__home-link"]} to="/">
          Accueil
        </NavLink>
      </Button>
    </motion.section>
  );
};

export default NotFound;
