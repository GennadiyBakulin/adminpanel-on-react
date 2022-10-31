import React from "react";
import styles from "./TableHeader.module.css";
import {TableCell} from "../TableCell/TableCell";
import {Checkbox, Icon} from "../../../shared/components";

export const TableHeader = () => {
  const tableHead = {
    checkField: {id: "checkField"},
    idField: {
      name: "id",
      text: "#",
    },
    dateField: {
      name: "date",
      text: "Дата",
    },
    statusField: {
      name: "status",
      text: "Статус",
    },
    positionField: {
      name: "position",
      text: "Позиций",
    },
    amountField: {
      name: "amount",
      text: "Сумма",
    },
    personNameField: {
      name: "name",
      text: "ФИО покупателя",
    },
  };

  return (
    <div className={styles._}>
      <TableCell
        className={styles.checkboxCell}
        name={tableHead.checkField.name}
      >
        <Checkbox />
      </TableCell>
      <TableCell className={styles.idCell} name={tableHead.idField.name}>
        {tableHead.idField.text}
      </TableCell>
      <TableCell className={styles.dateCell} name={tableHead.dateField.name}>
        {tableHead.dateField.text}
        <Icon className={styles.icon} name="v_arrow" />
      </TableCell>
      <TableCell
        className={styles.statusCell}
        name={tableHead.statusField.name}
      >
        {tableHead.statusField.text}
        <Icon className={styles.icon} name="v_arrow" />
      </TableCell>
      <TableCell
        className={styles.positionCell}
        name={tableHead.positionField.name}
      >
        {tableHead.positionField.text}
        <Icon className={styles.icon} name="v_arrow" />
      </TableCell>
      <TableCell
        className={styles.amountCell}
        name={tableHead.amountField.name}
      >
        {tableHead.amountField.text}
        <Icon className={styles.icon} name="v_arrow" />
      </TableCell>
      <TableCell
        className={styles.nameCell}
        name={tableHead.personNameField.name}
      >
        {tableHead.personNameField.text}
      </TableCell>
    </div>
  );
};
