import ImageProps from "./interface";

const Image = ({ imageComic, altComic }: ImageProps) => {
  return (
    <div>
      <img src={imageComic} alt={altComic} />
    </div>
  );
};

export default Image;
