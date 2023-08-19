import Carousel from "react-bootstrap/Carousel";
import classes from "./style.module.scss";
import { SliderProps } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
// low quality images
import smallFishingWebsiteImage from "../../../assets/images/fishing_website_desktop-small.png";
import smallBeerWebsiteImage from "../../../assets/images/BiereDeTaRegion-small.png";
import smallCottageWebsiteImage from "../../../assets/images/site_gites-small.png";
import smallPastryBlogImage from "../../../assets/images/pastry_blog-small.png";
// high quality images
import FishingWebsiteImage from "../../../assets/images/fishing_website_desktop.png";
import BeerWebsiteImage from "../../../assets/images/BiereDeTaRegion.png";
import CottageWebsiteImage from "../../../assets/images/site_gites.png";
import PastryBlogImage from "../../../assets/images/pastry_blog.png";
import CustomImage from "../CustomImage";

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
        <CustomImage
          id="1"
          smallImage={smallBeerWebsiteImage}
          image={BeerWebsiteImage}
          alt="Image du site bières de ta région"
          href="https://github.com/Romain-Bacque/apo-front"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CustomImage
          id="2"
          smallImage={smallCottageWebsiteImage}
          image={CottageWebsiteImage}
          alt="Image du site location de gîtes"
          href="https://github.com/Romain-Bacque/Site-gites"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CustomImage
          id="3"
          smallImage={smallPastryBlogImage}
          image={PastryBlogImage}
          alt="Image du blog de pâtisserie"
          href="https://github.com/Romain-Bacque/PastryBlog"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CustomImage
          id="4"
          smallImage={smallFishingWebsiteImage}
          image={FishingWebsiteImage}
          alt="Image du site moniteur guide de pêche"
          href="https://www.guidepecheariege.com/"
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
