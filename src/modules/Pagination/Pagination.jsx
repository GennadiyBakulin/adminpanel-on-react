import React from "react";
import styles from "./Pagination.module.css";
import {Button} from "../../shared/components";

export const Pagination = () => {
  return (
    <div className={styles._}>
      <div className={styles.selectPage}>
        <Button theme="blue" size="small" text="1" />
        <Button theme="blueTransparent" size="small" text="2" />
        <Button theme="blueTransparent" size="small" text="3" />
        ...
        <Button theme="blueTransparent" size="small" text="18" />
      </div>
      <div className={styles.currentPage}>
        <Button theme="blueTransparent" size="small" text="#" />
      </div>
    </div>
  );
};
