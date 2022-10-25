import React from "react";
import styles from "./Filters.module.css";
import { Button, Checkbox } from "../../shared/components";
import { Input } from "../../shared/components/Input/Input";

export const Filters = () => {
  return (
    <div className={styles._}>
      <div className={styles.registration}>
        <Input title="Дата оформления" placeholder="Введите" prevText="с" />
        <Input placeholder="Введите" prevText="по" />
      </div>
      <div className={styles.orderStatus}>
        <Input title="Статус заказа" value="Новый" stateType="multiple" />
        <div className={styles.multipleStatus}>
          <Checkbox
            className={styles.checkbox}
            text="Новый"
            name="filtersOrder"
          />
          <Checkbox
            className={styles.checkbox}
            text="Расчет"
            name="filtersOrder"
          />
          <Checkbox
            className={styles.checkbox}
            text="Подтвержден"
            name="filtersOrder"
          />
          <Checkbox
            className={styles.checkbox}
            text="Отложен"
            name="filtersOrder"
          />
          <Checkbox
            className={styles.checkbox}
            text="Выполнен"
            name="filtersOrder"
          />
          <Checkbox
            className={styles.checkbox}
            text="Отменен"
            name="filtersOrder"
          />
        </div>
      </div>
      <div className={styles.amount}>
        <Input title="Сумма заказа" placeholder="Введите" prevText="от" />
        <Input placeholder="Введите" prevText="до" />
      </div>
      <Button theme="blueTransparent" size="medium" text="Применить" />
    </div>
  );
};
