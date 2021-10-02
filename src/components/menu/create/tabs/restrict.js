import React from 'react';
import cx from 'classnames';
import { fromJS } from 'immutable';
import Box from '../../../atoms/box';
import { InputTextWithSearchMark } from '../../../atoms/input';
import QuestionMark from '../../../atoms/question-mark';
import operators from '../../../../static/database/master/operators.json';
import { ButtonWithOrder } from '../../../atoms/button';

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

const initOrder = {
  rarity: true,
  cost: false,
  position: false,
  name: false,
};
const Restrict = (props) => {
  const { setting, setSetting } = props;
  const [order, setOrder] = React.useState(fromJS(initOrder));

  const toggleOrder = (e) =>
    setOrder((prevState) => fromJS(initOrder).set(e.target.id, !prevState.get(e.target.id)));

  return (
    <div className="d_if w_100">
      <div style={{ height: '463px', width: '60%', paddingRight: '30px' }}>
        <Box height="100%" width="100%" className="mb_4 d_if" title="오퍼레이터 검색">
          <BoxItem long>
            <QuestionMark move_down={-35} move_right={400} />
            <InputTextWithSearchMark className="w_50" />
            <Box className="mt_4" width="92%" height="71%">
              <div className="t_center mb_2">
                <ButtonWithOrder id="rarity" order={order.get('rarity')} onClick={toggleOrder}>
                  등급순
                </ButtonWithOrder>
                <ButtonWithOrder id="cost" order={order.get('cost')} onClick={toggleOrder}>
                  코스트순
                </ButtonWithOrder>
                <ButtonWithOrder id="position" order={order.get('position')} onClick={toggleOrder}>
                  직군순
                </ButtonWithOrder>
                <ButtonWithOrder id="name" order={order.get('name')} onClick={toggleOrder}>
                  가나다순
                </ButtonWithOrder>
              </div>
              <hr />
              <div className="pt_2">
                {operators.map((operator) => (
                  <div key={operator.id}>{operator.name}</div>
                ))}
              </div>
            </Box>
          </BoxItem>
        </Box>
      </div>
      <div style={{ height: '463px', width: '40%', padding: '0px 30px' }}>
        <Box height="100%" width="100%" long>
          asdf
        </Box>
      </div>
    </div>
  );
};

export default Restrict;
