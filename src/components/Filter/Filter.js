import React from 'react';

const Filter = props => {
  const { valueFromFilter, catchFilterInfo } = props;
  return (
    <label>
      Найти контакт по имени
      <input
        type="text"
        value={valueFromFilter}
        onChange={catchFilterInfo}
      ></input>
    </label>
  );
};
export default Filter;
