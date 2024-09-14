function CommonButton({ children, name, onClick, className = "" }) {
  return (
    <button className={`button ${className}`} name={name} onClick={onClick}>
      {children}
    </button>
  );
}

export default CommonButton;
