const TextArea = ({ placeholder, className, onChange, value, name }) => {
  const classes =
    'textarea textarea-bordered w-full focus:right-0 focus:outline-0 bg-transparent h-40 text-lg font-normal text-slate-600 border-slate-300 focus:ring-blue-500 focus:ring-1 hover:ring-1';
  return (
    <>
      <textarea
        className={`${classes} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      ></textarea>
    </>
  );
};

export default TextArea;
