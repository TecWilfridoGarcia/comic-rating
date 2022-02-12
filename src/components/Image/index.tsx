import ImageProps from "./interface";
import "./styles.scss"

const Image = ({ imageComic, altComic }: ImageProps) => {
  return (
    <div className="wrapper-image">
      <img className="image" src={imageComic} alt={altComic} />
    </div>
  );
};

export default Image;
