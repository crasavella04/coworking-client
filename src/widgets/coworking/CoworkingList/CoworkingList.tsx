import {
  CoworkingItem,
  LoadingCoworkingItem,
  useCoworkingPageStore,
} from "@/entities/coworking";
import { getMinPrice } from "@/features/coworking";
import { useGetInitialFilterData } from "@/features/filter";
import { LIMIT_ITEMS_PER_PAGE } from "@/shared/constants/LIMIT_ITEMS_PER_PAGE";
import { Pagination } from "antd";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./style.module.css";

export default function CoworkingList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const {
    getCoworkingPage,
    currentData,
    currentPage,
    countPage,
    isLoading,
    isError,
  } = useCoworkingPageStore();
  const filterData = useGetInitialFilterData();

  useEffect(() => {
    getCoworkingPage(filterData, JSON.stringify(filterData));
  }, [searchParams]);

  useEffect(() => {
    if (ref.current) {
      const mt = ref.current.offsetTop;
      const footer = document.getElementsByTagName("footer")[0];
      const mb = footer.offsetHeight;
      setHeight(mt + mb + 40);
    }
  }, []);

  if (isLoading) {
    const arr = new Array(10).fill(1);

    return (
      <div
        ref={ref}
        className={styles.main}
        style={{
          maxHeight: `calc(100vh - ${height}px)`,
          overflow: "hidden",
        }}
      >
        {arr.map((_, index) => (
          <LoadingCoworkingItem key={index} />
        ))}
      </div>
    );
  }

  if (!currentData.length || isError)
    return (
      <div
        ref={ref}
        className={styles.main}
        style={{
          maxHeight: `calc(100vh - ${height}px)`,
        }}
      >
        <h3 className={styles.errorTitle}>
          {isError && "Что-то пошло не так! Попробуйте зайти позже"}
          {!currentData.length &&
            !isError &&
            "Коворкинги по вашему запросу не найдены! Попробуйте поменять фильтры или переехать в другой город!"}
        </h3>
      </div>
    );

  return (
    <div
      ref={ref}
      className={styles.main}
      style={{
        maxHeight: `calc(100vh - ${height}px)`,
      }}
    >
      {currentData.map((el) => {
        const minPrice = getMinPrice(el.price);
        const isFavorite = !!(new Date().getTime() % 2);
        return (
          <CoworkingItem
            title={el.title}
            images={el.images.map((el) => el.img)}
            conveniences={el.conveniences.map((el) => el.name)}
            price={minPrice}
            rating={el.rate}
            metro={el.metro?.name}
            address={el.address}
            isFavorite={isFavorite}
            id={el.id}
            key={el.id}
          />
        );
      })}

      <Pagination
        defaultCurrent={currentPage}
        onChange={(page) => {
          setSearchParams((prev) => ({ ...prev, page }));
          ref.current?.scrollTo({ top: 0 });
        }}
        pageSize={currentData.length}
        total={(countPage - 1) * LIMIT_ITEMS_PER_PAGE + 1}
        align="center"
      />
    </div>
  );
}
