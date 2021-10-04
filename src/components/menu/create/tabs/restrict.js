import React from 'react';
import cx from 'classnames';
import { fromJS } from 'immutable';
import _ from 'lodash';
import styled from 'styled-components';
import Box from '../../../atoms/box';
import { InputTextWithSearchMark } from '../../../atoms/input';
import QuestionMark from '../../../atoms/question-mark';
import operatorsData from '../../../../static/database/master/operators.json';
import { ButtonGroup, ButtonWithOrder } from '../../../atoms/button';
import Operator from '../../../atoms/operator';

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

const initOrder = { target: 'rarity', desc: false };
const Restrict = (props) => {
  const { setting, setSetting } = props;
  const operatorsMaster = fromJS(operatorsData);
  const [mode, setMode] = React.useState('allowed');
  const [order, setOrder] = React.useState(fromJS(initOrder));
  const [search, setSearch] = React.useState('');

  const toggleOrder = (e) => setOrder(fromJS({ target: e.target.id, desc: !order.get('desc') }));

  const getExpectedOpers = React.useCallback(() => {
    const expectedOpers = operatorsMaster
      .filter(
        (operator) =>
          !setting.getIn(['restrict', 'allowed']).includes(operator.get('id')) &&
          !setting.getIn(['restrict', 'disallowed']).includes(operator.get('id')),
      )
      .map((operator) => operator.get('id'));

    return search
      ? expectedOpers.filter((operator_id) => {
          const foundOperator = operatorsMaster.find(
            (operator) => operator.get('id') == operator_id,
          );
          return (
            foundOperator.get('name').includes(search) ||
            foundOperator.get('aliasName').find((item) => item.includes(search))
          );
        })
      : expectedOpers;
  }, [operatorsMaster, search, setting]);

  const SelectedOpers = React.useCallback(
    ({ mode }) => (
      <Box height="40%" width="100%" long>
        <h3 className="t_center">{mode == 'allowed' ? '지정 오퍼레이터' : '금지 오퍼레이터'}</h3>
        <div className="mt_3" style={{ height: '80%', overflowY: 'auto' }}>
          {setting.getIn(['restrict', mode]).map((operator_id) => (
            <Operator
              key={operator_id}
              operator={operatorsMaster.find((operator) => operator.get('id') == operator_id)}
              onClick={() =>
                setSetting((prevState) =>
                  prevState.updateIn(['restrict', mode], (list) =>
                    list.filter((id) => id != operator_id),
                  ),
                )
              }
            />
          ))}
        </div>
      </Box>
    ),
    [operatorsMaster, setSetting, setting],
  );

  return (
    <div className="d_if w_100">
      <div style={{ height: '463px', width: '60%', paddingRight: '30px' }}>
        <Box height="100%" width="100%" className="mb_4 d_if" title="오퍼레이터 검색">
          <BoxItem long>
            <QuestionMark move_down={-35} move_right={400} />
            <StyledTextWithSearchMark>
              <InputTextWithSearchMark
                className="w_50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ButtonGroup
                className="btn-group"
                setValue={setMode}
                value={mode}
                items={[
                  { id: 'allowed', name: '지정 모드' },
                  { id: 'disallowed', name: '금지 모드' },
                ]}
              />
            </StyledTextWithSearchMark>
            <Box className="mt_4 " width="92%" height="71%">
              <div className="t_center mb_2">
                <ButtonWithOrder id="rarity" order={order} onClick={toggleOrder}>
                  등급순
                </ButtonWithOrder>
                <ButtonWithOrder id="cost" order={order} onClick={toggleOrder}>
                  코스트순
                </ButtonWithOrder>
                <ButtonWithOrder id="position" order={order} onClick={toggleOrder}>
                  직군순
                </ButtonWithOrder>
                <ButtonWithOrder id="name" order={order} onClick={toggleOrder}>
                  가나다순
                </ButtonWithOrder>
              </div>
              <hr />
              <div className="mt_3" style={{ height: '90%', overflowY: 'auto' }}>
                {getExpectedOpers().map((operator_id) => (
                  <Operator
                    key={operator_id}
                    operator={operatorsMaster.find((operator) => operator.get('id') == operator_id)}
                    onClick={() => {
                      setSetting((prevState) =>
                        prevState.updateIn(['restrict', mode], (list) =>
                          list.includes(operator_id) ? list : list.push(operator_id),
                        ),
                      );
                    }}
                  />
                ))}
              </div>
            </Box>
          </BoxItem>
        </Box>
      </div>
      <div style={{ height: '463px', width: '40%', padding: '0px 30px' }}>
        <SelectedOpers mode="allowed" />
        <StyledButtons>
          <button
            onClick={() =>
              setSetting((prevState) => prevState.setIn(['restrict', 'allowed'], fromJS([])))
            }
          >
            상단 초기화
          </button>
          <button
            onClick={() =>
              setSetting((prevState) =>
                prevState
                  .setIn(['restrict', 'allowed'], fromJS([]))
                  .setIn(['restrict', 'disallowed'], fromJS([])),
              )
            }
          >
            모두 초기화
          </button>
          <button
            onClick={() =>
              setSetting((prevState) => prevState.setIn(['restrict', 'disallowed'], fromJS([])))
            }
          >
            하단 초기화
          </button>
        </StyledButtons>
        <SelectedOpers mode="disallowed" />
      </div>
    </div>
  );
};
const StyledButtons = styled.div`
  width: 100%;
  padding: 15px 15px;
  text-align: center;
  button {
    font-size: 10pt;
    line-height: 100%;
    border: 0px;
    padding: 8px 7px;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }
  button:first-child {
    border-bottom-left-radius: 20px;
    background-color: #2196f3;
    border-color: #2196f3;
    margin-right: 10px;
  }
  button: nth-child(2) {
    background-color: gray;
    border-color: gray;
  }
  button:last-child {
    border-top-right-radius: 20px;
    background-color: orange;
    border-color: orange;
    margin-left: 10px;
  }
`;
const StyledTextWithSearchMark = styled.div`
  .btn-group {
    float: right;
  }
  input[type='text'] {
    color: white;
    background-color: #4a4a4a;
    border-radius: 30px;
    border: 1px solid gray;
    padding: 5px 10px 5px 40px;
    line-height: 100%;
    font-size: 12pt;
    width: 45%;
  }
  img {
    position: absolute;
    transform: translate(8px, 5px);
  }
`;

export default Restrict;
