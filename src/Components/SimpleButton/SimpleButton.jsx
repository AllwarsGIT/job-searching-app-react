

const SimpleButton = ({style, children = 'text', className}) => {
  return (
    <button className={`${className || ''}`} style={style}>
      {children}
    </button>
  );
}

export default SimpleButton;

