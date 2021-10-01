import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

const Box = (props) => {
  const { height, width, children, className } = props;
  return (
    <StyledBox className={cx([className])} style={{ height, width }}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: inline-block;
  color: white;
  background-color: var(--black-bg-color);
  border: 2px solid var(--white-line-color);
  border-radius: 20px;
  padding: 15px;
`;
export default Box;
