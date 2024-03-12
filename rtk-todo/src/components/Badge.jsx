const Badge = ({ children, color, bgColor }) => {
  return (
    <div
      className={`${bgColor} ${color} px-2 py-0.5 rounded-full inline-block shadow-sm`}
    >
      {children}
    </div>
  );
};

export default Badge;
