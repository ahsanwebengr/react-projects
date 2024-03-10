import React from 'react';

const SelectMenu = ({ className, onChange, value, options = [], ...other }) => {
  const classes =
    'select select-bordered w-full focus:right-0 focus:outline-0 bg-transparent text-lg font-normal text-slate-400 border-slate-300 focus:ring-blue-500 focus:ring-1 hover:ring-1';

  return (
    <>
      <select className={`${classes}`} onChange={onChange} {...other} value={value}>
        <option disabled>Task State</option>
        {options?.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectMenu;
