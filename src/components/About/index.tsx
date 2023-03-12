import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import classes from "./style.module.scss";

const About: React.FC = () => {
  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
    express: 0,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setProgress({ html: 80, css: 70, js: 80, react: 80, express: 70 });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      onAnimationStart={() => window.scrollTo(0, 0)}
      className={classes.about}
    >
      <article className={classes.about__article}>
        <div>
          <div className={classes["description"]}>
            <h3 className={classes["description-title"]}>Lorem ipsum dolor</h3>
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>HTML</h4>
            <ProgressBar variant="warning" now={progress.html} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>CSS</h4>
            <ProgressBar variant="warning" now={progress.css} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>JavaScript</h4>
            <ProgressBar variant="warning" now={progress.js} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>ReactJS</h4>
            <ProgressBar variant="warning" now={progress.react} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>Express.js</h4>
            <ProgressBar variant="warning" now={progress.express} />
          </div>
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
    </motion.section>
  );
};

export default About;
