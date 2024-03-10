const Input = ({
  type = 'text',
  placeholder,
  className,
  onChange,
  value,
  name,
  ...others
}) => {
  const classes =
    'input input-bordered w-full focus:right-0 focus:outline-0 bg-transparent text-lg font-normal text-slate-600 border-slate-300 focus:ring-blue-500 focus:ring-1 hover:ring-1';
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={`${classes} ${className}`}
        {...others}
      />
    </>
  );
};

export default Input;
