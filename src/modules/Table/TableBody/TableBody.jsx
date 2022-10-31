import React from "react";
import styles from "./TableBody.module.css";
import { Checkbox } from "../../../shared/components";
import { TableCell } from "../TableCell/TableCell";
import { dataTable } from "../dataTable";
import { TableRow } from "../TableRow/TableRow";
import { StatusOrder } from "../StatusOrder/StatusOrder";

export const TableBody = () => {
  return (
    <div className={styles._}>
      {dataTable.map((order) => (
        <TableRow className={styles.row}>
          <TableCell className={styles.checkboxCell}>
            <Checkbox />
          </TableCell>
          <TableCell className={styles.idCell}>{order.id}</TableCell>
          <TableCell className={styles.dateCell}>{order.data}</TableCell>
          <TableCell className={styles.statusCell}>
            <StatusOrder status={order.status} />
          </TableCell>
          <TableCell className={styles.positionCell}>
            {order.position}
          </TableCell>
          <TableCell className={styles.amountCell}>{order.amount}</TableCell>
          <TableCell className={styles.nameCell}>{order.personName}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};
