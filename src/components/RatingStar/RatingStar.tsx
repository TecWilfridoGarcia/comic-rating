import { useEffect, useState } from "react";
import RatingStarProps from "./interface";
import "./styles.scss";

export const RatingStar = ({ numValue }: RatingStarProps) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [currentValue, setCurrentValue] = useState<string | null>();
  const [currentValueGet, setCurrentValueGet] = useState<string | null>();

  useEffect(() => {
    console.log(currentValue);
  }, [currentValue]);

  useEffect(() => {
    if (rating > 0) {
      setCurrentValue(
        JSON.stringify(
          localStorage.setItem(
            "value",
            JSON.stringify([{ rating: rating, numValue: numValue }])
          )
        )
      );
    }
  }, [rating]);

  const handlerRating = (index: number) => {
    setRating(index);
    setCurrentValueGet(currentValue);
    console.log("currentValueGet: ", currentValueGet, currentValueGet);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handlerRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
