import React from 'react';

const SelectMenu = ({ children, className, onChange, value, options = [], ...other }) => {
  const classes =
    'select select-bordered w-full focus:right-0 focus:outline-0 bg-transparent text-lg font-normal text-slate-400 border-slate-300 focus:ring-blue-500 focus:ring-1 hover:ring-1';

  return (
    <>
      <select className={`${classes}`} onChange={onChange} {...other} value={value}>
        <option disabled selected>Task State</option>
        {children}
      </select>
    </>
  );
};

export default SelectMenu;
