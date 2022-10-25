import React from "react";
import styles from "./Search.module.css";
import { Button, Searchbar } from "../../shared/components";
import { Filters } from "../Filters/Filters";

export const Search = () => {
  return (
    <>
      <div className={styles._}>
        <div className={styles.topPanel}>
          <div className={styles.searchContainer}>
            <Searchbar placeholder="Номер заказа или ФИО" filled />
            <Button theme="blue" size="medium" icon="filter" text="Фильтры" />
            <Button
              theme="blueTransparent"
              size="medium"
              text="Сбросить фильтры"
            />
          </div>
          <Button
            theme="blueTransparent"
            size="small"
            icon="refresh"
            text="Загрузка"
          />
        </div>
      </div>
      <Filters />
    </>
  );
};
