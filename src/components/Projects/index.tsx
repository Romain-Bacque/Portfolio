import { useState, useEffect } from "react";
import classes from "./style.module.scss";
import { motion } from "framer-motion";
import Slider from "../UI/Slider";

const slideDetails = [
  {
    title: "Site bière de ta région",
    text: "Site réalisé en équipe au sein de l'école O'clock. Il référence les microbrasseries grâce à la géolocalisation et met en avant leurs savoir-faire ou leurs expériences. Ce site pourra ensuite évoluer vers d'autres boissons comme le cidre ou les spiritueux. Le site utilise diverses librairies telles que react-calendar pour la gestion du planning des événements.",
  },
  {
    title: "Site location de gîtes",
    text: "Projet perso que j'ai réalisé dans le cadre de mon apprentissage de React et de TypeScript, j'ai mis en application mes compétences en front (ReactJS et TypeScript) et en back (NodeJS et Express.js). Le site utilise diverses librairies telles que react-calendar pour la gestion du planning.",
  },
  {
    title: "Blog de pâtisserie",
    text: "Projet perso que je suis en train de développer pour ma sœur, douée pour la pâtisserie, afin de mettre en avant son talent et son savoir-faire. J'utilise intégralement Next.js pour la partie front et back. L'utilisation de Next.js m'a paru judicieux car ce site à besoin d'être bien référencé.",
  },
  {
    title: "Site moniteur guide de pêche",
    text: "C'est le premier site que j'ai réalisé. Je l'ai développé sans utiliser de framework, afin de me faire la main sur HTML, CSS et JavaScript. J'ai ensuite refactorisé l'ensemble du code vers la fin de ma formation chez O'clock pour le rendre plus lisible et facile à maintenir, ceci en le divisant en différents modules.",
  },
];

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
        <Slider onClick={HandleItemClick} animate={false} />
        {isToggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={classes["projects__description-container"]}
          >
            <div className="description">
              <h3 className="description-title">
                {slideDetails[currentSlide].title}
              </h3>
              <div className="description-container">
                <p className="description-text">
                  {slideDetails[currentSlide].text}
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
