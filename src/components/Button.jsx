const Button = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`${className} transition-all duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;