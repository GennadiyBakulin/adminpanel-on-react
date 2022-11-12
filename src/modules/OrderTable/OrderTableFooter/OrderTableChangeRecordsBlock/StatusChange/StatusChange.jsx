import React, { useContext } from 'react';
import styles from './StatusChange.module.css';
import { Button, Dropdown, Radio } from '../../../../../shared/components';
import { FiltersContext } from '../../../../../contexts/FiltersContext';

export const StatusChange = () => {
  const { STATUSES_NAMES_TRANSLATION } = useContext(FiltersContext);
  return (
    <Dropdown
      className={styles._}
      trigger={
        <div>
          <Button theme='blue' size='small' icon='pencil'>
            Изменить статус
          </Button>
        </div>
      }
      overlay={
        <>
          <Radio
            key='new'
            className={styles.radio}
            name='statusChangeRadio'
            value='new'
            text={STATUSES_NAMES_TRANSLATION.new}
          />
          <Radio
            className={styles.radio}
            text={STATUSES_NAMES_TRANSLATION.calculated}
            key='calculating'
            name='statusChangeRadio'
            value='calculating'
          />
          <Radio
            className={styles.radio}
            text={STATUSES_NAMES_TRANSLATION.confirmed}
            value='confirm'
            key='confirm'
            name='statusChangeRadio'
          />
          <Radio
            className={styles.radio}
            text={STATUSES_NAMES_TRANSLATION.postponed}
            value='postponed'
            key='postponed'
            name='statusChangeRadio'
          />
          <Radio
            className={styles.radio}
            text={STATUSES_NAMES_TRANSLATION.completed}
            value='done'
            key='done'
            name='statusChangeRadio'
          />
          <Radio
            className={styles.radio}
            text={STATUSES_NAMES_TRANSLATION.cancelled}
            value='canceled'
            key='canceled'
            name='statusChangeRadio'
          />
        </>
      }
    />
  );
};
