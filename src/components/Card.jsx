const Card = ({ children, className = '' }) => {
  return (
    <div className={`${className} bg-gray-800 rounded-xl overflow-hidden shadow-lg`}>
      {children}
    </div>
  );
};

export default Card;