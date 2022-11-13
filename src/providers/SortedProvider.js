import React, { useState } from 'react';
import { SortedContext } from '../contexts/SortedContext';

export const SortedProvider = ({ children }) => {
  const [columnSorted, setColumnSorted] = useState('');
  const [directionSorted, setDirectionSorted] = useState('ascending');

  const handleClickSort = (key) => {
    if (columnSorted === key) {
      if (directionSorted === 'ascending') setDirectionSorted('descending');
      else setDirectionSorted('ascending');
    } else {
      setColumnSorted(key);
      setDirectionSorted('ascending');
    }
  };

  return (
    <SortedContext.Provider
      value={{
        handleClickSort,
        columnSorted,
        directionSorted
      }}
    >
      {children}
    </SortedContext.Provider>
  );
};
