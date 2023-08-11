import Carousel from "react-bootstrap/Carousel";
import classes from "./style.module.scss";
import { SliderProps } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import imageFishingWebsite from "../../../assets/images/fishing_website_desktop.png";
import imageBeerWebsite from "../../../assets/images/BiereDeTaRegion.png";
import imageCottageWebsite from "../../../assets/images/site_gites.png";
import imagePastryBlog from "../../../assets/images/pastry_blog.png";

const Slider: React.FC<SliderProps> = ({ size, animate, onClick }) => {
  const sliderSizeClass =
    size === "sm"
      ? classes["slider--sm"]
      : size === "lg"
      ? classes["slider--lg"]
      : "";

  return (
    <Carousel
      variant="dark"
      onSelect={onClick}
      interval={animate ? 5000 : null}
      className={`${classes.slider} ${sliderSizeClass}`}
    >
      <Carousel.Item>
        <a target="_blank" href="https://github.com/Romain-Bacque/apo-front">
          <img
            id="2"
            className="d-block w-100 h-100"
            src={imageBeerWebsite}
            alt="Image du site bières de ta région"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target="_blank" href="https://github.com/Romain-Bacque/Site-gites">
          <img
            id="3"
            className="d-block w-100 h-100"
            src={imageCottageWebsite}
            alt="Image du site location de gîtes"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target="_blank" href="https://github.com/Romain-Bacque/PastryBlog">
          <img
            id="3"
            className="d-block w-100 h-100"
            src={imagePastryBlog}
            alt="Image du blog de pâtisserie"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target="_blank" href="https://www.guidepecheariege.com/">
          <img
            id="1"
            className="d-block w-100 h-100"
            src={imageFishingWebsite}
            alt="Image du site moniteur guide de pêche"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

Slider.defaultProps = {
  size: "lg",
  animate: true,
};

export default Slider;
