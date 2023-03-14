import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import classes from "./style.module.scss";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";

const reactObserverOptions = {
  threshold: 0,
};

const About: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView(reactObserverOptions);
  const { ref: ref2, inView: inView2 } = useInView(reactObserverOptions);
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
        <div className={classes.about__skills}>
          <div className="description">
            <h3 className="description-title">Compétences</h3>
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>HTML</h4>
            <ProgressBar now={progress.html} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>CSS</h4>
            <ProgressBar now={progress.css} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>JavaScript</h4>
            <ProgressBar now={progress.js} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>ReactJS</h4>
            <ProgressBar now={progress.react} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>Express.js</h4>
            <ProgressBar now={progress.express} />
          </div>
        </div>
      </article>
      <article ref={ref1} className={classes.about__article}>
        <div
          className={`${classes["about__article-container"]} ${
            inView1 ? classes.visible : ""
          }`}
        >
          <div
            className={`${classes["about__third-image"]} ${
              inView1 ? classes.visible : ""
            }`}
          >
            <img
              src="assets/img/guide2__accueil.jpg"
              alt="photo numéro 1"
              loading="lazy"
            />
          </div>
          <div className="description">
            <h3 className="description-title">Lorem ipsum dolor</h3>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              molestiae et consectetur ipsum. Ipsa commodi modi, ipsum ad fuga
              est nobis sed, pariatur vero accusantium veniam quibusdam possimus
              quo laudantium!
            </p>
          </div>
          <div className={classes["about__fourth-image"]}>
            <img
              src="assets/img/guide2__accueil.jpg"
              alt="photo numéro 2"
              loading="lazy"
            />
          </div>
        </div>
      </article>
      <article ref={ref2} className={classes.about__article}>
        <div
          ref={ref2}
          className={`${classes["about__article-container"]} ${
            inView2 ? classes.visible : ""
          }`}
        >
          <div className={classes["about__first-image"]}>
            <img
              src="assets/img/guide__accueil.jpg"
              srcSet="assets/img/guide__accueil.jpg 1772w,
                          assets/img/guide__accueil__m.jpg 763w"
              sizes="100vw"
              alt="photo numéro 3"
            />
            <div className={classes["about__second-image"]}>
              <img
                src="assets/img/guide2__accueil.jpg"
                alt="photo numéro 4"
                loading="lazy"
              />
            </div>
          </div>
          <div className="description">
            <h3 className="description-title">Lorem ipsum dolor</h3>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              molestiae et consectetur ipsum. Ipsa commodi modi, ipsum ad fuga
              est nobis sed, pariatur vero accusantium veniam quibusdam possimus
              quo laudantium!
            </p>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default About;
