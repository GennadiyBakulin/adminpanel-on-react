import React from "react";
import classnames from "classnames";
import styles from "./Input.module.css";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

const stateTypes = {
  incorrect: "incorrect",
  disabled: "disabled",
};

export const Input = ({
  className,
  stateType,
  title,
  placeholder,
  value,
  prevText,
  ...props
}) => {
  const blockClass = classnames(styles._, className, {
    [styles.incorrect]: stateType === stateTypes.incorrect,
    [styles.disabled]: stateType === stateTypes.disabled,
  });

  return (
    <label className={blockClass}>
      {title}
      <span className={styles.field}>
        {prevText}
        <input
          className={styles.fieldText}
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={stateType === stateTypes.disabled}
        />
        {stateType === stateTypes.incorrect && (
          <Button
            className={styles.button}
            size="small"
            icon="x_medium"
            {...props}
          />
        )}
        {stateType === stateTypes.disabled && (
          <Icon className={styles.icon} name="locked" {...props} />
        )}
      </span>
    </label>
  );
};

export const Inputs = () => {
  return (
    <>
      <Input title="Дата и время заказа" placeholder="Введите" prevText="до" />
      <Input
        stateType="incorrect"
        title="Дата и время заказа"
        placeholder="Введите"
        value="06.12.2021"
      />
      <Input
        stateType="disabled"
        title="Дата и время заказа"
        placeholder="Введите"
        value="06.12.2021"
      />
    </>
  );
};
