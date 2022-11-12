import classnames from 'classnames';
import styles from './Table.module.css';

export const Table = ({ className, children }) => {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
};
