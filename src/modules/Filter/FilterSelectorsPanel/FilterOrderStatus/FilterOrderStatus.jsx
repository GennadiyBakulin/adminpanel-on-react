import React, { useContext } from 'react';
import styles from './FilterOrderStatus.module.css';
import { Checkbox, Dropdown, Icon, Input } from '../../../../shared/components';
import { FiltersContext } from '../../../../contexts/FiltersContext';

export const FilterOrderStatus = () => {
  const { STATUSES_NAMES_TRANSLATION } = useContext(FiltersContext);
  const { filterOfStatuses, handleChangeStatusChoose } = useContext(FiltersContext);

  const allStatuses = Object.keys(filterOfStatuses);
  const checkedOnlyStatuses = allStatuses.filter((el) => filterOfStatuses[el]);
  const statusesValueForInput =
    checkedOnlyStatuses.length === 0 || checkedOnlyStatuses.length === allStatuses.length
      ? 'Любой'
      : checkedOnlyStatuses.map((el) => STATUSES_NAMES_TRANSLATION[el]).join(', ');
  return (
    <Dropdown
      className={styles._}
      trigger={
        <div>
          <Input
            title='Статус заказа'
            value={statusesValueForInput}
            postfix={<Icon className={styles.multiple} name='v_arrow' />}
            disabled
          />
        </div>
      }
      overlay={
        <>
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.new}
            value='new'
            key='new'
            name='filtersOrderStatus'
            checked={filterOfStatuses.new}
            onChange={() => handleChangeStatusChoose('new')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.calculated}
            value='calculating'
            key='calculating'
            name='filtersOrderStatus'
            checked={filterOfStatuses.calculated}
            onChange={() => handleChangeStatusChoose('calculated')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.confirmed}
            value='confirm'
            key='confirm'
            name='filtersOrderStatus'
            checked={filterOfStatuses.confirmed}
            onChange={() => handleChangeStatusChoose('confirmed')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.postponed}
            value='postponed'
            key='postponed'
            name='filtersOrderStatus'
            checked={filterOfStatuses.postponed}
            onChange={() => handleChangeStatusChoose('postponed')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.completed}
            value='done'
            key='done'
            name='filtersOrderStatus'
            checked={filterOfStatuses.completed}
            onChange={() => handleChangeStatusChoose('completed')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.cancelled}
            value='canceled'
            key='canceled'
            name='filtersOrderStatus'
            checked={filterOfStatuses.cancelled}
            onChange={() => handleChangeStatusChoose('cancelled')}
          />
        </>
      }
    />
  );
};
