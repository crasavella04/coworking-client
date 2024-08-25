import { CSSProperties, memo } from "react";
import styles from "./styles.module.css";

interface RatingProps {
  rating: number;
  className?: string;
  style?: CSSProperties;
}

export default memo(function Rating({ rating, className, style }: RatingProps) {
  return (
    <div
      className={
        styles.rating +
        " " +
        `${
          rating > 4
            ? styles.ratingSuccess
            : rating > 3
            ? styles.ratingWarning
            : styles.ratingError
        }` +
        " " +
        className
      }
      style={style}
    >
      {"Рейтинг: " + rating + " / 5"}
    </div>
  );
});
