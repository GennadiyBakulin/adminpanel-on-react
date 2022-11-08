import React from 'react';
import styles from './Pagination.module.css';
import { Button } from '../../shared/components';

export const Pagination = () => {
  return (
    <div className={styles._}>
      <div className={styles.selectPage}>
        <Button theme='blue' size='small'>
          1
        </Button>
        <Button theme='blueTransparent' size='small'>
          2
        </Button>
        <Button theme='blueTransparent' size='small'>
          3
        </Button>
        ...
        <Button theme='blueTransparent' size='small'>
          18
        </Button>
      </div>
      <div className={styles.currentPage}>
        <Button theme='blueTransparent' size='small'>
          #
        </Button>
      </div>
    </div>
  );
};
