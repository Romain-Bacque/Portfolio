import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import classes from "./style.module.scss";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import imageAircraft from "../../assets/images/aircraft.jpg";
import imageBoard from "../../assets/images/board.jpg";
import imageCoding from "../../assets/images/code.jpg";
import imageFishingWebsite from "../../assets/images/fishing_website.png";
import imageDegree from "../../assets/images/degree.jpg";

const reactObserverOptions = {
  threshold: 0,
};

const About: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView(reactObserverOptions);
  const { ref: ref2, inView: inView2 } = useInView(reactObserverOptions);
  const { ref: ref3, inView: inView3 } = useInView(reactObserverOptions);
  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    js: 0,
    ts: 0,
    next: 0,
    react: 0,
    node: 0,
    express: 0,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setTimeout(() => {
      setProgress({
        html: 80,
        css: 70,
        js: 80,
        ts: 60,
        next: 70,
        react: 80,
        node: 50,
        express: 70,
      });
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
            <h4 className={classes.progressBar__title}>TypeScript</h4>
            <ProgressBar now={progress.ts} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>Next.js</h4>
            <ProgressBar now={progress.next} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>ReactJS</h4>
            <ProgressBar now={progress.react} />
          </div>
          <div className={classes.progressBar}>
            <h4 className={classes.progressBar__title}>Node.js</h4>
            <ProgressBar now={progress.node} />
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
            className={`${classes["about__image"]} ${
              classes["about__image--3"]
            } ${inView1 ? classes.visible : ""}`}
          >
            <div>
              <img src={imageAircraft} alt="Photo d'un avion" loading="lazy" />
            </div>
          </div>
          <div className="description">
            <h3 className="description-title">Mon Parcours</h3>
            <p className="description-text">
              Actuellement employé au sein d'Airbus, spécialisé en fabrication
              de calculateurs embarqué, j'ai décidé d'entamer une reconversion
              professionnelle dans le milieu du développement web & mobile.
            </p>
            <p className="description-text">
              Durant mon parcours dans l'aéronautique, ayant des connaissances
              en vb.net, ma hiérarchie m'a proposé de réaliser un logiciel de
              gestion de consommable pour automatiser les commandes avec notre
              logiciel de gestion SAP. Une expérience particulièrement
              enrichissante et satisfaisante dans la mesure où j'ai pu répondre
              à leurs exigences. Je me suis par la suite intéressé à l'univers
              du développement web.
            </p>
          </div>
          <div
            className={`${classes["about__image"]} ${classes["about__image--4"]}`}
          >
            <div>
              <img
                src={imageBoard}
                alt="Photo d'une carte électronique"
                loading="lazy"
              />
            </div>
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
          <div
            className={`${classes["about__image"]} ${classes["about__image--1"]}`}
          >
            <div>
              <img
                src={imageCoding}
                alt="Image de code source"
                loading="lazy"
              />
            </div>
            <div
              className={`${classes["about__image"]} ${classes["about__image--2"]}`}
            >
              <div>
                <img
                  src={imageFishingWebsite}
                  alt="Image d'un site web de moniteur guide de pêche"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="description">
            <h3 className="description-title">Mes Débuts</h3>
            <p className="description-text">
              J'ai tout d'abord appris le HTML, le CSS et le JavaScript en
              autodidacte, et j'ai réalisé mon premier projet, qui est un site
              web vitrine pour moniteur guide de pêche, puis, je me suis
              intéressé à la librairie ReactJS dans le but de créer des SPA.
              Après un apprentissage intensif, j'ai commencé à concevoir et à
              développer mon deuxième projet, qui est un site de réservation de
              gîtes, j'ai choisi d'utiliser le stack MERN, ainsi qu'une
              architecture MVC.
            </p>
            <p className="description-text">
              Enfin, j'ai débuté ma formation de développeur web & mobile
              fullstack JavaScript intensive au sein de l'école O'clock, d'une
              durée de 5 mois. Ayant toujours soif d'apprendre, je me suis formé
              en parallèle au superset TypeScript pour l'intégrer dans mes
              futurs projets. Suite à ça, j'ai appris à utiliser Next.js pour
              améliorer le référencement de mes sites.
            </p>
          </div>
        </div>
      </article>
      <article ref={ref3} className={classes.about__article}>
        <div
          ref={ref3}
          className={`${classes["about__article-container"]} ${
            inView3 ? classes.visible : ""
          }`}
        >
          <div
            className={`${classes["about__image"]} ${classes["about__image--5"]}`}
          >
            <div>
              <img
                src={imageDegree}
                alt="Photo du titre professionnel DWWM de Romain Bacque"
                loading="lazy"
              />
            </div>
          </div>
          <div className="description">
            <h3 className="description-title">Mon diplôme</h3>
            <p className="description-text">
              Afin de me prouver que je suis capable d'exercer le métier, j'ai
              décidé de passer le diplôme de Développeur Web et Web Mobile en
              février 2023.
            </p>
            <p className="description-text">
              J'ai obtenu les résultats en mars 2023 et l'ai réussi avec succès.
              Ce titre est classé au niveau V (correspondant à un Bac +2).
            </p>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default About;
