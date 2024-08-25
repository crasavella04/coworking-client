import React from "react";
import styles from "./styles.module.css";
import { Skeleton } from "antd";

export default function SkeletonLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Skeleton.Button active className={styles.favorite} />
        <Skeleton.Button active className={styles.link} />
      </div>
      <div className={styles.main}>
        <div className={styles.imageBlock}>
          <Skeleton.Input active className={styles.mainImage} />
          <div className={styles.secondaryImages}>
            <Skeleton.Input active className={styles.secondaryImage} />
            <Skeleton.Input active className={styles.secondaryImage} />
            <Skeleton.Input active className={styles.secondaryImage} />
            <Skeleton.Input active className={styles.secondaryImage} />
            <Skeleton.Input active className={styles.secondaryImage} />
          </div>
        </div>
        <div className={styles.contentBlocks}>
          <Skeleton.Input active className={styles.contentBlock} />
          <Skeleton.Input active className={styles.contentBlock} />
        </div>
      </div>
    </div>
  );
}
