import { useUserStore } from "@/entities/user";
import { getMinPrice, useGetCoworkingItem } from "@/features/coworking";
import {
  CoworkingData,
  Gallery,
  SkeletonLoader,
  TopRow,
} from "@/widgets/coworking-page";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";

export default function CoworkingPage() {
  const { id } = useParams();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const { coworking, isLoading, isError } = useGetCoworkingItem(id);

  if (isLoading) return <SkeletonLoader />;

  if (isError || !coworking)
    return (
      <div className={styles.errorContainer}>
        <h2>404</h2>
        <p>Коворкинг не найден!</p>
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
      </div>
    );

  const minPrice = getMinPrice(coworking.price);

  return (
    <div className={styles.container}>
      <TopRow id={coworking.id} isAuth={!!user} link={coworking.link} />
      <section className={styles.mainSection}>
        <Gallery
          images={coworking.images.map((el) => el.img)}
          title={coworking.title}
        />
        <div className={styles.contentCol}>
          <CoworkingData
            title={coworking.title}
            rate={coworking.rate}
            conveniences={coworking.conveniences.map((el) => el.name)}
            address={coworking.address}
            metro={coworking.metro?.name}
            price={minPrice}
          />
          <YMaps>
            <Map
              defaultState={{
                center: [coworking.longitude, coworking.latitude],
                zoom: 16,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              className={styles.map}
            >
              <Placemark
                modules={["geoObject.addon.balloon"]}
                properties={{
                  balloonContentBody: "Description",
                }}
                defaultGeometry={[coworking.longitude, coworking.latitude]}
              />
            </Map>
          </YMaps>
        </div>
      </section>
    </div>
  );
}
