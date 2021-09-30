const Box = (props) => {
  const { height, width, children } = props;
  return (
    <div className="content" style={{ height, width }}>
      {children}
    </div>
  );
};

export default Box;
