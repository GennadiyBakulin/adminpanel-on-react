import classnames from 'classnames';
import styles from './TableBody.module.css';

export const TableBody = ({ className, children }) => {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
};
