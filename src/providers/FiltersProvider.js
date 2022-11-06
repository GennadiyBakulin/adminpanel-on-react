import React, { useState } from 'react';
import { FiltersContext } from '../contexts/FiltersContext';

export const FiltersProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerClickShowFilters = () => {
    setShowFilters(!showFilters);
  };
  return <FiltersContext.Provider value={{ showFilters, handlerClickShowFilters }}>{children}</FiltersContext.Provider>;
};
