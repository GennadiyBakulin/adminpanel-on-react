import React from "react";
import styles from "./RecordsDelete.module.css";
import {Button} from "../../shared/components";

export const RecordsDelete = () => {
  return (
    <div className={styles._}>
      <Button theme="red" size="small" icon="bin" text="Удалить" />
      <div className={styles.deleteRecords}>
        Удалить n записей?
        <button className="button button_theme-blue-transparent button_size_small">
          Удалить
        </button>
        <button className="button button_theme-blue button_size_small">
          Отмена
        </button>
      </div>
    </div>
  );
};
