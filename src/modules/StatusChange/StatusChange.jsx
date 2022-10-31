import React from "react";
import styles from "./StatusChange.module.css";
import {Button} from "../../shared/components";

export const StatusChange = () => {
  return (
    <div className={styles._}>
      <Button theme="blue" size="small" icon="pencil" text="Изменить статус" />
    </div>
  );
};
