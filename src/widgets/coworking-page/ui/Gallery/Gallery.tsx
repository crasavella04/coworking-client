import { ImageCarousel } from "@/entities/coworking";
import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  const ref = useRef<CarouselRef>(null);
  const subitemsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (subitemsRef.current && subitemsRef.current.childNodes[currentSlide]) {
      const childNode = subitemsRef.current.childNodes[currentSlide];

      // @ts-ignore
      const childOffsetLeft = childNode.offsetLeft;

      // @ts-ignore
      const childWidth = childNode.offsetWidth;

      subitemsRef.current.scrollTo({
        left:
          childOffsetLeft -
          subitemsRef.current.offsetWidth / 2 -
          childWidth / 2,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div className={styles.container}>
      {images.length !== 0 && (
        <>
          <ImageCarousel
            className={styles.carouselSize}
            carouselClassName={styles.carouselSize}
            images={images}
            title={title}
            ref={ref}
            currentIndex={currentSlide}
            onChange={setCurrentSlide}
          />
          <div className={styles.subitemsContainer} ref={subitemsRef}>
            {images.map((el, index) => {
              return (
                <img
                  loading="lazy"
                  className={
                    styles.subitem +
                    ` ${currentSlide === index ? styles.subitemActive : ""}`
                  }
                  onClick={() => {
                    setCurrentSlide(index);
                    ref.current?.goTo(index);
                  }}
                  src={el}
                  alt={title}
                  key={index}
                />
              );
            })}
          </div>
        </>
      )}

      {images.length === 0 && (
        <img
          style={{
            objectFit: "cover",
            width: "824px",
            height: "654px",
            borderRadius: "8px",
          }}
          src="/defaultCoworkingLogo.avif"
          alt=""
        />
      )}
    </div>
  );
}
