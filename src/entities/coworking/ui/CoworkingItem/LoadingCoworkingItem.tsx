import { Button, Skeleton } from "antd";
import styles from "./CoworkingItem.module.css";
import ImageCarousel from "./ImageCarousel";

export default function LoadingCoworkingItem() {
  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <ImageCarousel images={[]} title={"loading..."} />
      <div className={styles.content}>
        <Skeleton.Input
          style={{ width: "250px" }}
          size={"small"}
          block
          active
        />
        <Skeleton.Input
          style={{ width: "320px" }}
          size={"small"}
          block
          active
        />
        <Skeleton.Input
          style={{ width: "320px" }}
          size={"small"}
          block
          active
        />
        <Skeleton.Input
          className={styles.contentAddress}
          style={{ width: "320px" }}
          size={"small"}
          block
          active
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" disabled>
            Забронировать
          </Button>
        </div>

        <div
          className={styles.contentRating}
          style={{
            width: "88px",
            overflow: "hidden",
            padding: 0,
            borderRadius: "12px",
          }}
        >
          <Skeleton.Input style={{ width: "100%" }} active block />
        </div>
      </div>
    </div>
  );
}
