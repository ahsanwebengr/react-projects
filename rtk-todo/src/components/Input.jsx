import React from 'react';

const Input = ({ type = 'text', placeholder, className, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`input input-bordered w-full focus:right-0 focus:outline-0 ${className}`}
      />
    </>
  );
};

export default Input;
