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
    checkedOnlyStatuses.length === 0
      ? 'статус не выбран'
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
            text={STATUSES_NAMES_TRANSLATION.calculating}
            value='calculating'
            key='calculating'
            name='filtersOrderStatus'
            checked={filterOfStatuses.calculating}
            onChange={() => handleChangeStatusChoose('calculating')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.confirm}
            value='confirm'
            key='confirm'
            name='filtersOrderStatus'
            checked={filterOfStatuses.confirm}
            onChange={() => handleChangeStatusChoose('confirm')}
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
            text={STATUSES_NAMES_TRANSLATION.done}
            value='done'
            key='done'
            name='filtersOrderStatus'
            checked={filterOfStatuses.done}
            onChange={() => handleChangeStatusChoose('done')}
          />
          <Checkbox
            className={styles.checkbox}
            text={STATUSES_NAMES_TRANSLATION.canceled}
            value='canceled'
            key='canceled'
            name='filtersOrderStatus'
            checked={filterOfStatuses.canceled}
            onChange={() => handleChangeStatusChoose('canceled')}
          />
        </>
      }
    />
  );
};
