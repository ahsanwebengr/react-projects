import React from 'react';

const Button = ({
  children,
  type,
  className,
  bgColor = 'bg-blue-500',
  color,
  onClick,
}) => {
  const btnClasses = 'btn btn-primary inline-block flex-none';
  return (
    <>
      <button
        className={`${btnClasses} ${bgColor} ${color} ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
