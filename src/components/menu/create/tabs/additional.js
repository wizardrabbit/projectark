import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import Box, { BoxItem } from '../../../atoms/box';
import QuestionMark from '../../../atoms/question-mark';
import RestrictObj from '../../../atoms/restrictObj';

const Additional = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="d_if w_100">
      <div style={{ height: '463px', width: '60%', paddingRight: '30px' }}>
        <Box height="100%" width="100%" className="mb_4 d_if" title="추가 제약 목록">
          <QuestionMark move_down={-35} move_right={275} />
          <StyledTabs>
            <button onClick={() => setSelected(0)}>단일분대</button>
            <button onClick={() => setSelected(1)}>진영제한</button>
            <button onClick={() => setSelected(2)}>직군금지</button>
            <button onClick={() => setSelected(3)}>일반제약</button>
          </StyledTabs>
          <StyledContents>
            {selected === 0 && (
              <div>
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
                <RestrictObj />
              </div>
            )}
            {selected === 1 && <div>1</div>}
            {selected === 2 && <div>2</div>}
            {selected === 3 && <div>3</div>}
          </StyledContents>
        </Box>
      </div>
      <div style={{ height: '463px', width: '40%', padding: '0px 30px' }}>
        <Box height="100%" width="100%" className="mb_4 d_if" title="선택한 제약 목록"></Box>
      </div>
    </div>
  );
};

const StyledTabs = styled.div`
  float: left;
  background-color: transparent;
  width: 30%;
  height: 90%;
  display: inline-block;
  button {
    font-size: 15pt;
    display: block;
    background-color: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid gray;
    color: white;
    padding: 25px 5px;
    width: 100%;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    line-height: 100%;
  }
  button:hover {
    background: linear-gradient(to right, gray, transparent);
  }
`;
const StyledContents = styled.div`
  display: inline-block;
  width: 70%;
  height: 90%;
  overflow-y: auto;
`;
export default Additional;
