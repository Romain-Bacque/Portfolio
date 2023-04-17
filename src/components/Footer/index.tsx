import { Github, Linkedin, Facebook } from "react-bootstrap-icons";
import classes from "./style.module.scss";

// component
const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__copy}>
        © 2022 Portfolio De Romain. Tous droits
        réservés.
      </p>
      <ul className={classes.footer__link}>
        <li>
          <a href="https://github.com/Romain-Bacque">
            <Github className={classes.footer__icon} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/romain-bacque/">
            <Linkedin className={classes.footer__icon} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/romain.bacque.7tfj6958j/">
            <Facebook className={classes.footer__icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
