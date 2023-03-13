import Carousel from "react-bootstrap/Carousel";
import classes from "./style.module.scss";
import { SliderProps } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import image4 from "../../../assets/images/third-image.jpg";

const Slider: React.FC<SliderProps> = ({ animate, height, onClick }) => {
  return (
    <Carousel
      onSelect={onClick}
      interval={animate ? 5000 : null}
      style={{ height: `${height}vh` }}
      className={classes.slider}
    >
      <Carousel.Item>
        <img
          id="1"
          className="d-block w-100 h-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="2"
          className="d-block w-100 h-100"
          src={image4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="3"
          className="d-block w-100 h-100"
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

Slider.defaultProps = {
  animate: true,
  height: 27,
};

export default Slider;
