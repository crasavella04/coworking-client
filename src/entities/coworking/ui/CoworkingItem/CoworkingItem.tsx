import { useUserStore } from "@/entities/user";
import { Button } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteToggler from "../FavoriteToggler/FavoriteToggler";
import Rating from "../Rating/Rating";
import styles from "./CoworkingItem.module.css";
import ImageCarousel from "./ImageCarousel";

interface CoworkingItemProps {
  title: string;
  images: string[];
  conveniences: string[];
  price?: number;
  rating: number;
  metro?: string;
  address: string;
  isFavorite: boolean;
  id: number;
}

export default memo(function CoworkingItem({
  title,
  images,
  conveniences,
  price,
  rating,
  metro,
  address,
  isFavorite,
  id,
}: CoworkingItemProps) {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const ref = useRef<CarouselRef>(null);

  return (
    <div className={styles.container}>
      <ImageCarousel ref={ref} images={images} title={title} />
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>{title}</h3>
        <p>
          Стоимость за час:{" "}
          {price ? (
            <>
              от <span>{price}р.</span>
            </>
          ) : (
            "Не дано"
          )}
        </p>
        <div className={styles.contentConvenience}>
          {conveniences.join(" · ")}
        </div>
        <div className={styles.contentAddress}>
          {metro && (
            <div>
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/external-others-inmotus-design/67/external-Subway-metro-others-inmotus-design-14.png"
                alt="metro"
              />
              <p>{metro}</p>
            </div>
          )}

          <div>
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/material-rounded/24/visit.png"
              alt="address"
            />
            <p>{address}</p>
          </div>
        </div>
        <div className={styles.contentButton}>
          {user && <FavoriteToggler id={id} defaultIsFavorite={isFavorite} />}
          <Button type="primary" onClick={() => navigate(`/coworking/${id}`)}>
            Забронировать
          </Button>
        </div>

        <Rating rating={rating} className={styles.contentRating} />
      </div>
    </div>
  );
});
