import React, { useState, useEffect } from 'react';

import './SortOptions.scss';

const SortOptions = ({ options, sortField, onChange }) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(sortField);
  }, [sortField, setSelected]);

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  const renderSortOption = ({ label, value }) => {
    return (
      <div key={label}>
        <input
          name="sortBy"
          type="radio"
          checked={selected === value}
          value={value}
          onChange={(e) => setSelected(e.currentTarget.value)}
        />{' '}
        {label}
      </div>
    );
  };

  if (!options || !options.length) return null;

  return (
    <div className="sort-options-container">
      <div>Sort by: </div>
      <div>{options.map(renderSortOption)}</div>
    </div>
  );
};

export default SortOptions;
