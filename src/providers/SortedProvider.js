import React, { useState } from 'react';
import { SortedContext } from '../contexts/SortedContext';

export const SortedProvider = ({ children }) => {
  const [columnSorted, setColumnSorted] = useState('');
  const [directionSorted, setDirectionSorted] = useState(true);

  const handlerClickSortedOnColumns = (event) => {
    if (columnSorted === event.target.id) {
      setDirectionSorted(!directionSorted);
    } else {
      setColumnSorted(event.target.id);
      setDirectionSorted(true);
    }
  };

  return (
    <SortedContext.Provider
      value={{
        handlerClickSortedOnColumns,
        columnSorted,
        directionSorted
      }}
    >
      {children}
    </SortedContext.Provider>
  );
};
