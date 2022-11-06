import React, { useState } from 'react';
import { FiltersContext } from '../contexts/FiltersContext';

export const FiltersProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const [searchbarValue, setSearchbarValues] = useState('');
  const [filterDateFromValue, setFilterDateFromValue] = useState('');
  const [filterDateToValue, setFilterDateToValue] = useState('');
  const [filterSumFromValue, setFilterSumFromValue] = useState('');
  const [filterSumToValue, setFilterSumToValue] = useState('');
  const [filterOfStatuses, setFilterOfStatuses] = useState({
    new: false,
    calculating: false,
    confirm: false,
    postponed: false,
    done: false,
    canceled: false
  });

  const STATUSES_NAMES_TRANSLATION = {
    new: 'Новый',
    calculating: 'Расчет',
    confirm: 'Подтвержден',
    postponed: 'Отложен',
    done: 'Выполнен',
    canceled: 'Отменен'
  };

  const createHandleChange = (setter) => [({ target: { value } }) => setter(value), () => setter('')];

  const [handleChangeSearchbar, handleResetSearchbar] = createHandleChange(setSearchbarValues);
  const [handleChangeFilterDateFromValue, handleResetFilterDateFromValue] = createHandleChange(setFilterDateFromValue);
  const [handleChangeFilterDateToValue, handleResetFilterDateToValue] = createHandleChange(setFilterDateToValue);
  const [handleChangeFilterSumFromValue, handleResetFilterSumFromValue] = createHandleChange(setFilterSumFromValue);
  const [handleChangeFilterSumToValue, handleResetFilterSumToValue] = createHandleChange(setFilterSumToValue);

  const handleResetAllFilters = () => {
    setSearchbarValues('');
    setFilterDateFromValue('');
    setFilterDateToValue('');
    setFilterSumFromValue('');
    setFilterSumToValue('');
    setFilterOfStatuses({
      new: false,
      calculating: false,
      confirm: false,
      postponed: false,
      done: false,
      canceled: false
    });
  };
  const handleChangeStatusChoose = (status) => {
    setFilterOfStatuses({
      ...filterOfStatuses,
      [status]: !filterOfStatuses[status]
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        showFilters,
        handlerClickShowFilters,
        searchbarValue,
        handleChangeSearchbar,
        handleResetSearchbar,
        filterDateFromValue,
        handleChangeFilterDateFromValue,
        handleResetFilterDateFromValue,
        filterDateToValue,
        handleChangeFilterDateToValue,
        handleResetFilterDateToValue,
        filterSumFromValue,
        handleChangeFilterSumFromValue,
        handleResetFilterSumFromValue,
        filterSumToValue,
        handleChangeFilterSumToValue,
        handleResetFilterSumToValue,
        filterOfStatuses,
        handleResetAllFilters,
        STATUSES_NAMES_TRANSLATION,
        handleChangeStatusChoose
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
