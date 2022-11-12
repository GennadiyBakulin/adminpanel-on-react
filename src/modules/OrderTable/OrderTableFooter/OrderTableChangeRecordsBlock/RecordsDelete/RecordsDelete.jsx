import React from 'react';
import styles from './RecordsDelete.module.css';
import { Button, Dropdown } from '../../../../../shared/components';

export const RecordsDelete = () => {
  return (
    <Dropdown
      className={styles._}
      trigger={
        <Button theme='red' size='small' icon='bin'>
          Удалить
        </Button>
      }
      overlay={
        <>
          Удалить n записей?
          <Button className={styles.button} theme='blueTransparent' size='small'>
            Удалить
          </Button>
          <Button className={styles.button} theme='blue' size='small'>
            Отмена
          </Button>
        </>
      }
    />
  );
};
