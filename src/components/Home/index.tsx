import { Button } from "react-bootstrap";
import Projects from "../Projects";
import classes from "./style.module.scss";

const Home: React.FC = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <div className={classes["home__presentation-container"]}>
          <h2 className={classes.home__name}>
            Romain<span className={classes.home__lastname}>Bacque</span>
          </h2>
          <p className={classes.home__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ducimus fugiat nobis rem dolorem harum officiis, aperiam corporis
            deleniti nihil? Iusto, deserunt ipsa vel nostrum repellat nemo omnis
            eum esse!
          </p>
          <Button
            className={classes["home__project-button"]}
            variant="light"
          >
            Mes projets
          </Button>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
