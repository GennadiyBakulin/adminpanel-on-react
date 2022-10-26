import React, {useState} from "react";
import styles from "./Search.module.css";
import {Button, Searchbar} from "../../shared/components";
import {Filters} from "../Filters/Filters";

export const Search = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerShowFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles._}>
      <div className={styles.topPanel}>
        <div className={styles.searchContainer}>
          <Searchbar
            className={styles.searchbar}
            placeholder="Номер заказа или ФИО"
            filled
          />
          <Button
            theme="blue"
            size="medium"
            icon="filter"
            text="Фильтры"
            onClick={handlerShowFilters}
          />
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
      {showFilters && <Filters />}
    </div>
  );
};
