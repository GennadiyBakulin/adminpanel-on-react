import React, { useState } from 'react';
import { SortedContext } from '../contexts/SortedContext';

export const SortedProvider = ({ children }) => {
  const [columnSorted, setColumnSorted] = useState('');
  const [directionSorted, setDirectionSorted] = useState(true);

  const handleClickSort = (key) => {
    if (columnSorted === key) {
      setDirectionSorted(!directionSorted);
    } else {
      setColumnSorted(key);
      setDirectionSorted(true);
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
