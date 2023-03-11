import { motion } from "framer-motion";
import classes from "./style.module.scss";

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.about}
    >
      <article className={classes.about__article}>
        <div className={classes["about__first-image"]}>
          <img
            src="assets/img/guide__accueil.jpg"
            srcSet="assets/img/guide__accueil.jpg 1772w,
                          assets/img/guide__accueil__m.jpg 763w"
            sizes="100vw"
            alt="photo du guide numéro 1"
          />
          <div className={classes["about__second-image"]}>
            <img
              src="assets/img/guide2__accueil.jpg"
              alt="photo du guide numéro 2"
              loading="lazy"
            />
          </div>
        </div>
        <div className={classes["description"]}>
          <h3 className={classes["description-title"]}>Lorem ipsum dolor</h3>
          <p className={classes["description-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            molestiae et consectetur ipsum. Ipsa commodi modi, ipsum ad fuga est
            nobis sed, pariatur vero accusantium veniam quibusdam possimus quo
            laudantium!
          </p>
        </div>
      </article>
      <article className={classes.about__article}>
        <div className={classes["about__third-image"]}>
          <img
            src="assets/img/guide2__accueil.jpg"
            alt="photo du guide numéro 2"
            loading="lazy"
          />
        </div>
        <div className={classes["description"]}>
          <h3 className={classes["description-title"]}>Lorem ipsum dolor</h3>
          <p className={classes["description-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            molestiae et consectetur ipsum. Ipsa commodi modi, ipsum ad fuga est
            nobis sed, pariatur vero accusantium veniam quibusdam possimus quo
            laudantium!
          </p>
        </div>
        <div className={classes["about__fourth-image"]}>
          <img
            src="assets/img/guide2__accueil.jpg"
            alt="photo du guide numéro 2"
            loading="lazy"
          />
        </div>
      </article>
    </motion.section>
  );
};

export default About;
