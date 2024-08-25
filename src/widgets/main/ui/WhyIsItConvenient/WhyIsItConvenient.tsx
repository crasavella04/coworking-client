import { motion } from "framer-motion";
import styles from "./styles.module.css";

const convenients = [
  {
    title: "Большое количество коворкингов",
    description:
      "Найдите идеальное пространство для работы из множества коворкингов в вашем городе.",
  },
  {
    title: "Информация об услугах коворкинга",
    description:
      "Узнайте все о предоставляемых услугах и особенностях каждого коворкинга перед бронированием.",
  },
  {
    title: "Большое количество фильтров",
    description:
      "Используйте множество фильтров для быстрого и точного поиска коворкинга.",
  },
  {
    title: "Все крупные города России",
    description:
      "Покрытие коворкингов во всех ключевых городах России для вашего удобства.",
  },
];

export default function WhyIsItConvenient() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Почему это удобно?</h2>
      <div className={styles.convenientsContainer}>
        {convenients.map((convenient, index) => (
          <motion.div
            className={styles.convenientItem}
            viewport={{ once: true }}
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4 * index,
            }}
            key={index}
          >
            <h3>{convenient.title}</h3>
            <p>{convenient.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
