import cx from 'classnames';
import React from 'react';
import Box from '../../../atoms/box';
import Img from '../../../../images/icon_ARK.png';
import DonkeyImg from '../../../../images/icon_donkey.png';
import QuestionMark from '../../../atoms/question-mark';
import { InputCheckbox, InputSlider, InputText } from '../../../atoms/input';

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
const BoxThumbnail = (props) => (
  <img
    src={props.src}
    alt=""
    width={props.width ? `${props.width}px` : '40px'}
    className="m_1 c_pointer"
  />
);
const Default = (props) => {
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

  return (
    <div className="d_if">
      <div style={{ height: '100%', width: '60%', paddingRight: '30px' }}>
        <Box height="20%" width="100%" className="mb_4 d_if">
          <BoxItem title="당신의 이름은?">
            <InputText
              id="default.name"
              value={setting.getIn(['default', 'name'])}
              onChange={handleSetting}
              className="mt_1 mb_1"
            />
            <h6>최대 8글자까지 가능합니다.</h6>
          </BoxItem>
          <BoxItem title="결제도장" center>
            <BoxThumbnail src={Img} />
            <BoxThumbnail src={Img} />
            <BoxThumbnail src={Img} />
            <QuestionMark
              move_down={15}
              onClick={() => {
                console.log('clicked');
              }}
            />
            <h6>원하는 이미지를 선택해 주세요.</h6>
          </BoxItem>
        </Box>
        <Box height="10%" width="100%" className="mt_4 mb_4">
          <BoxItem>
            <h1>글로벌 서버</h1>
          </BoxItem>
          <BoxItem center>
            <InputCheckbox
              id="default.isGlobal"
              checked={setting.getIn(['default', 'isGlobal'])}
              onChange={handleSetting}
            />
            <QuestionMark
              move_down={7}
              onClick={() => {
                console.log('clicked');
              }}
            />
          </BoxItem>
        </Box>
        <Box height="15%" width="100%" className="mt_4">
          <BoxItem title="분대 편성 수 제한">
            <InputSlider
              id="default.numOfOpers"
              value={setting.getIn(['default', 'numOfOpers']) || 0}
              min={1}
              max={12}
              onChange={handleSetting}
            />
          </BoxItem>
          <BoxItem center>
            <img src={DonkeyImg} alt="" width="60px" className="m_1" />
            <span
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '100%',
                fontWeight: 'bold',
                fontSize: '18pt',
                width: '25px',
                padding: '0px 6px 3px 6px',
                transform: 'translate(-29px, 34px)',
              }}
            >
              {setting.getIn(['default', 'numOfOpers']) || 0}
            </span>
            <QuestionMark
              move_down={22}
              onClick={() => {
                console.log('clicked');
              }}
            />
          </BoxItem>
        </Box>
      </div>
      <div style={{ height: '100%', width: '40%', padding: '0px 30px' }}>
        <Box height="100%" width="100%">
          <BoxItem long>
            <div className="w_100 t_center">
              <h3>작전 설정</h3>
              <QuestionMark move_right={120} move_down={-30} />
            </div>
          </BoxItem>
        </Box>
      </div>
    </div>
  );
};

export default Default;
