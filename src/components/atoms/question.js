const Question = (props) => (
  <span
    style={{
      position: 'absolute',
      borderRadius: '100%',
      backgroundColor: 'white',
      color: 'black',
      padding: '0px 2px',
      transform: 'translate(50%, 50%)',
      cursor: 'pointer',
    }}
    {...props}
  >
    ？
  </span>
);

export default Question;
