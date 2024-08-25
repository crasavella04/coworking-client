import { motion } from "framer-motion";
import styles from "./styles.module.css";

const pluses = [
  "Выбирайте подходящий вариант",
  "Выбирайте удобные даты",
  "Оплачивайте в несколько кликов",
];

export default function HowIsItWorksBlock() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Как это работает?</h2>
      <div className={styles.plusesContainer}>
        {pluses.map((plus, index) => (
          <motion.div
            className={styles.plusItem}
            viewport={{ once: true }}
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4 * index,
            }}
            key={index}
          >
            <span>{index + 1}</span>
            <p>{plus}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
