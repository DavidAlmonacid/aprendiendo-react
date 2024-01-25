const Square = ({ children, isSelected, updateBoard, index }) => {
  return (
    <div
      className={`square ${isSelected ? "is-selected" : ""}`}
      onClick={() => updateBoard(index)}
    >
      {children}
    </div>
  );
};

export default Square;
