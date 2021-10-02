import React from 'react';
import cx from 'classnames';
import Box from '../../../atoms/box';
import { InputText } from '../../../atoms/input';
import QuestionMark from '../../../atoms/question-mark';
import operators from '../../../../static/database/master/operators.json';

const BoxItem = (props) => (
  <div
    className={cx([
      'd_ib',
      props.long ? 'w_100' : 'w_50',
      'h_100',
      'v_sub',
      props.center && 't_center',
    ])}
  >
    {props.title && <h3>{props.title}</h3>}
    {props.children}
  </div>
);

const Restrict = (props) => {
  const { setting, setSetting } = props;
  const handleSetting = React.useCallback(
    ({ target }) => {
      const { id, value, type, checked } = target;

      setSetting((prevState) =>
        prevState.setIn(id.split('.'), type === 'checkbox' ? checked : value),
      );
    },
    [setSetting],
  );

  console.log(operators);
  return (
    <div className="d_if w_100">
      <div style={{ height: '470px', width: '60%', paddingRight: '30px' }}>
        <Box height="26%" width="100%" className="mb_4 d_if" title="오퍼레이터 검색">
          <BoxItem long>
            <QuestionMark move_down={-35} move_right={400} />
            <InputText />
          </BoxItem>
        </Box>
      </div>
      <div style={{ height: '470px', width: '40%', padding: '0px 30px' }}>
        <Box height="100%" width="100%" long>
          asdf
        </Box>
      </div>
    </div>
  );
};

export default Restrict;
