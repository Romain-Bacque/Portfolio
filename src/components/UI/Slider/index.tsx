import Carousel from "react-bootstrap/Carousel";
import classes from "./style.module.scss";
import { SliderProps } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider: React.FC<SliderProps> = ({ animate, color, height }) => {
  return (
    <Carousel
      variant={color}
      interval={animate ? 5000 : null}
      style={{ height: `${height}vh` }}
      className={classes.slider}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

Slider.defaultProps = {
  animate: true,
  color: "white",
  height: 30
};

export default Slider;
