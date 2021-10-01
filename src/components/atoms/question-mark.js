const QuestionMark = (props) => (
  <span
    style={{
      position: 'absolute',
      borderRadius: '100%',
      backgroundColor: 'white',
      color: 'black',
      padding: '0px 2px',
      transform: `translate(${props.move_right || 10}px, ${props.move_down || 0}px)`,
      cursor: 'pointer',
    }}
    {...props}
  >
    ？
  </span>
);

export default QuestionMark;
