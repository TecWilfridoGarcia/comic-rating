import { useEffect, useState } from "react";
import RatingStarProps from "./interface";
import "./styles.scss";

export const RatingStar = ({ numValue, numRating }: RatingStarProps) => {
  const [hover, setHover] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);
  const [rating, setRating] = useState(0);
  numRating = rating;

  useEffect(() => {
    const retrievedObject = localStorage.getItem("ratings") || "{}";
    if (retrievedObject) {
      setTodos(JSON.parse(retrievedObject));
      if (todos[0]?.numRating > 0) {
        setRating(todos[0]?.numRating);
      } else if (todos[0]?.numRating === 0) {
        setRating(0);
      }
      console.log("todos", todos[0]?.numRating, rating);
    }
  }, []);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {
              setRating(index);
              localStorage.setItem(
                "ratings",
                JSON.stringify({ numRating, numValue })
              );
            }}
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
