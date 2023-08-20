import { useEffect, useRef, useState } from "react";
import classes from "./style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface CustomImageProps {
  smallImage: string;
  image: string;
  alt: string;
  href?: string;
  id?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  smallImage,
  image,
  alt,
  href,
  id,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current?.complete) {
      handleLoad();
    } else {
      imageRef.current?.addEventListener("load", handleLoad);
    }

    return () => {
      imageRef.current?.removeEventListener("load", handleLoad);
    };
  }, []);

  let content = (
    <img
      ref={imageRef}
      id={id}
      className={classes.image}
      src={image}
      alt={alt}
      loading="lazy"
    />
  );

  if (href) {
    content = (
      <a className={classes.link} target="_blank" href={href}>
        {content}
      </a>
    );
  }

  return (
    <div
      ref={divRef}
      className={`${classes["blur-load"]} ${isLoaded ? classes["loaded"] : ""}`}
      style={{
        backgroundImage: `url(${smallImage})`,
      }}
    >
      {content}
    </div>
  );
};

export default CustomImage;
