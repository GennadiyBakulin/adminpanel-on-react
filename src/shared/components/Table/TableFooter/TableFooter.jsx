import classnames from 'classnames';
import styles from './TableFooter.module.css';

export const TableFooter = ({ className, children }) => {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
};
