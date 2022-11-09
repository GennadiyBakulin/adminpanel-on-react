import React, { useState } from 'react';
import { SortedContext } from '../contexts/SortedContext';

export const SortedProvider = ({ children }) => {
  const [columnSorted, setColumnSorted] = useState('');

  const handlerClickSortedOnColumns = (event) => {
    setColumnSorted(event.target.id);
  };

  return (
    <SortedContext.Provider
      value={{
        handlerClickSortedOnColumns,
        columnSorted
      }}
    >
      {children}
    </SortedContext.Provider>
  );
};
