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
        <img
          id="1"
          className="d-block w-100 h-100"
          src={imageFishingWebsite}
          alt="Image du site moniteur guide de pêche"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="2"
          className="d-block w-100 h-100"
          src={imageBeerWebsite}
          alt="Image du site bières de ta région"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="3"
          className="d-block w-100 h-100"
          src={imageCottageWebsite}
          alt="Image du site location de gîtes"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="3"
          className="d-block w-100 h-100"
          src={imagePastryBlog}
          alt="Image du blog de pâtisserie"
        />
      </Carousel.Item>
    </Carousel>
  );
};

Slider.defaultProps = {
  size: "lg",
  animate: true,
};

export default Slider;
