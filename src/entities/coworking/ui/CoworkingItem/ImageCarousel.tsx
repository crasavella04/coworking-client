import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { ForwardedRef, forwardRef } from "react";
import styles from "./CoworkingItem.module.css";

interface ImageCarouselProps {
  images: string[];
  title: string;
  carouselClassName?: string;
  className?: string;
  onChange?: React.Dispatch<React.SetStateAction<number>>;
  currentIndex?: number;
  ref: React.RefObject<CarouselRef>;
}

export default forwardRef(function ImageCarousel(
  {
    images,
    title,
    className,
    carouselClassName,
    onChange,
    currentIndex,
  }: ImageCarouselProps,
  ref: ForwardedRef<CarouselRef>
) {
  return (
    <div className={[styles.imageContainer, className].join(" ")}>
      <Carousel
        dots={!onChange}
        ref={ref}
        className={[styles.carouselSize, carouselClassName].join(" ")}
      >
        {images.length &&
          images.map((el, index) => (
            <div
              className={[styles.img, carouselClassName].join(" ")}
              key={index}
            >
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={el}
                alt={title}
              />
            </div>
          ))}

        {!images.length && (
          <div className={styles.img}>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={"/defaultCoworkingLogo.avif"}
              alt={title}
            />
          </div>
        )}
      </Carousel>
      {images.length > 1 && (
        <>
          <div
            className={styles.arrowLeft}
            onClick={() => {
              if (ref) {
                // @ts-ignore
                ref.current?.prev?.();
                if (onChange && currentIndex !== undefined)
                  onChange((prev) => {
                    if (currentIndex === 0) return images.length - 1;

                    return --prev;
                  });
              }
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{
                width: "10px",
                height: "16px",
                color: "#fff",
              }}
            >
              <path
                fill="currentColor"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              ></path>
            </svg>
          </div>
          <div
            className={styles.arrowRight}
            onClick={() => {
              if (ref) {
                // @ts-ignore
                ref.current?.next?.();
                if (onChange && currentIndex !== undefined)
                  onChange((prev) => {
                    if (currentIndex === images.length - 1) return 0;

                    return ++prev;
                  });
              }
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{
                width: "10px",
                height: "16px",
                color: "#fff",
              }}
            >
              <path
                fill="currentColor"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              ></path>
            </svg>
          </div>
        </>
      )}
    </div>
  );
});
