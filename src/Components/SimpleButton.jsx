

const SimpleButton = ({style, children = 'text'}) => {
  return (
    <button className="simple-button " style={style}>
      {children}
    </button>
  );
}

export default SimpleButton;