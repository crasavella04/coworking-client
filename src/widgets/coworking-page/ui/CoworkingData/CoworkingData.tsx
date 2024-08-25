import { Rating } from "@/entities/coworking";
import { Button } from "antd";
import styles from "./styles.module.css";

interface CoworkingDataProps {
  title: string;
  rate: number;
  conveniences: string[];
  metro?: string;
  address: string;
  price?: number;
}

export default function CoworkingData({
  title,
  rate,
  price,
  address,
  metro,
  conveniences,
}: CoworkingDataProps) {
  return (
    <div className={styles.main}>
      <Rating rating={rate} className={styles.rating} />
      <h1 className={styles.title}>{title}</h1>
      <div>Стоимость за час: от {price ? `${price}р.` : "Не дано"}</div>
      <div>{conveniences.join(" · ")}</div>
      <div className={styles.location}>
        {metro && (
          <>
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/external-others-inmotus-design/67/external-Subway-metro-others-inmotus-design-14.png"
              alt="external-Subway-metro-others-inmotus-design-14"
            />
            <p>{metro}</p>
          </>
        )}
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/material-rounded/24/visit.png"
          alt="visit"
        />
        <p>{address}</p>
      </div>
      <div className={styles.button}>
        <Button type="primary">Забронировать</Button>
      </div>
    </div>
  );
}
