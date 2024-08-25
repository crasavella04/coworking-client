import { memo, useState } from "react";
import styles from "./styles.module.css";

interface FavoriteTogglerProps {
  id: number | string;
  defaultIsFavorite: boolean;
  isButton?: boolean;
  buttonStyle?: React.CSSProperties;
}

export default memo(function FavoriteToggler({
  defaultIsFavorite,
  id,
  isButton,
  buttonStyle,
}: FavoriteTogglerProps) {
  const [isFavorite, setFavorite] = useState(defaultIsFavorite);

  const toggleFavorites = async () => {
    const prev = isFavorite;
    setFavorite(!prev);
    try {
      // запрос на изменение избранности
      console.log(id);
    } catch {
      setFavorite(prev);
    }
  };

  return (
    <button
      style={buttonStyle}
      onClick={toggleFavorites}
      className={styles.toggler + ` ${isButton ? styles.togglerButton : ""}`}
    >
      <svg
        className={`${styles.favoriteToggler} ${
          isFavorite ? styles.favoriteTogglerActive : ""
        }`}
        width="24"
        height="21"
        viewBox="0 0 24 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.84 2.60999C20.3292 2.099 19.7228 1.69364 19.0554 1.41708C18.3879 1.14052 17.6725 0.998169 16.95 0.998169C16.2275 0.998169 15.5121 1.14052 14.8446 1.41708C14.1772 1.69364 13.5708 2.099 13.06 2.60999L12 3.66999L10.94 2.60999C9.9083 1.5783 8.50903 0.998704 7.05 0.998704C5.59096 0.998704 4.19169 1.5783 3.16 2.60999C2.1283 3.64169 1.54871 5.04096 1.54871 6.49999C1.54871 7.95903 2.1283 9.3583 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60535C22.3095 7.93789 22.4518 7.22248 22.4518 6.49999C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72718 21.351 3.12075 20.84 2.60999V2.60999Z"
          stroke="#FF4242"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
});
