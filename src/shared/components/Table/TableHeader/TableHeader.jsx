import classnames from 'classnames';
import { TableRow } from '../TableRow/TableRow';
import styles from './TableHeader.module.css';

export const TableHeader = ({ className, children }) => {
  const baseClassNames = classnames(styles._, className);

  return <TableRow className={baseClassNames}>{children}</TableRow>;
};
