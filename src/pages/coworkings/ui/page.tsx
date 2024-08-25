import { CoworkingList, Filter } from "@/widgets/coworking";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.container}>
      <Filter />
      <CoworkingList />
    </main>
  );
}
