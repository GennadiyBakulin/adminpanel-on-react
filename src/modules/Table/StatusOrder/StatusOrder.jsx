import classnames from "classnames";
import styles from "./StatusOrder.module.css";
import {Icon} from "../../../shared/components";
import React from "react";

const STATUS = {
  new: "new",
  calculated: "calculated",
  postponed: "postponed",
  completed: "completed",
  cancelled: "cancelled",
};

const STATUS_TRANSLATION = {
  new: "Новый",
  calculated: "Расчет",
  postponed: "Отложен",
  completed: "Выполнен",
  cancelled: "Отменен",
};

const STATUS_ICON = {
  new: "dot",
  calculated: "dot",
  postponed: "dot",
  completed: "checkmark",
  cancelled: "abort",
};

export const StatusOrder = ({className, status}) => {
  const classNameStatus = classnames(styles._, className, {
    [styles.new]: status === STATUS.new,
    [styles.calculated]: status === STATUS.calculated,
    [styles.postponed]: status === STATUS.postponed,
    [styles.completed]: status === STATUS.completed,
    [styles.cancelled]: status === STATUS.cancelled,
  });

  return (
    <div className={classNameStatus}>
      <Icon className={styles.icon} name={STATUS_ICON[status]} />
      {STATUS_TRANSLATION[status]}
    </div>
  );
};
