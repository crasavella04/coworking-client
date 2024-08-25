import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function WelcomeBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    setMarginTop(ref.current?.offsetTop || 0);
  }, []);

  return (
    <section
      ref={ref}
      className={styles.container}
      style={{ height: `calc(100vh - ${marginTop}px)` }}
    >
      <div>
        <h1 className={styles.title}>
          <span>Забронировать коворкинг</span> стало легче!
        </h1>
        <Link to={"/coworkings"} className={styles.link} type="primary">
          Выбирать!
        </Link>
        <motion.div
          className={styles.leftColMessage}
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <img src="/arrow.svg" alt="" />
          <p>Ваше идеальное рабочее место тут!</p>
        </motion.div>
      </div>
      <div className={styles.imageCol}>
        <img className={styles.image} src="/hero_promo.png" alt="" />
        <div className={styles.pluses}>
          <motion.div
            className={styles.plusesItem}
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              // x: 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            Большой выбор
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              // x: 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={styles.plusesItem}
          >
            Мгновенная бронь
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              // x: 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={styles.plusesItem}
          >
            Коворкинги со всей России
          </motion.div>
        </div>
      </div>
    </section>
  );
}
