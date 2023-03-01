import { Github, Linkedin, Facebook } from "react-bootstrap-icons";
import classes from "./style.module.scss";

// component
const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__copy}>
        © 2022 <span className="bold">Mon Portfolio.</span> Tous droits
        réservés.
      </p>
      <ul className={classes.footer__link}>
        <li>
          <a href="https://github.com/Romain-Bacque">
            <Github className="text-white" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/romain-bacque/">
            <Linkedin className="text-white" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/romain.bacque.7tfj6958j/">
            <Facebook className="text-white" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
