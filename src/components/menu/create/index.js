import React from 'react';
import cx from 'classnames';
import { fromJS } from 'immutable';
import Tabs from './tabs';
import GenerateButtonBox from './generate-button-box';

const initSetting = {
  default: {
    name: '',
    operatorLimit: 0,
    isGlobal: false,
    map: {
      mainStory: [],
      resource: [],
      chip: [],
      event: [],
    },
    title: '',
  },
  restrict: {},
  additional: {},
};

const Create = () => {
  const [selected, setSelected] = React.useState(1);
  const [setting, setSetting] = React.useState(fromJS(initSetting));

  const resetSetting = () => setSetting(fromJS(initSetting));

  const TabButton = (props) => {
    const { index, title } = props;
    return (
      <button
        className={cx(['tab-item', { selected: selected === index }])}
        onClick={() => setSelected(index)}
      >
        {title}
      </button>
    );
  };
  return (
    <>
      <div className="content-deco-1" />
      <div className="content-deco-2" />
      <div className="content create">
        <div className="tabs">
          <TabButton index={1} title="기본 설정" />
          <TabButton index={2} title="출격 오퍼레이터 지정/금지" />
          <TabButton index={3} title="추가 제약" />
        </div>
        <div className="d_if h_100 w_100">
          <div style={{ width: '70%' }}>
            {selected === 1 && <Tabs.Default setting={setting} setSetting={setSetting} />}
            {selected === 2 && <Tabs.Restrict setting={setting} setSetting={setSetting} />}
            {selected === 3 && <Tabs.Additional setting={setting} setSetting={setSetting} />}
          </div>
          <div style={{ width: '30%' }}>
            <GenerateButtonBox
              setting={setting}
              setSetting={setSetting}
              resetSetting={resetSetting}
            />
          </div>
        </div>
        <h3>디버깅 / 개발 편의를 위한 데이터 바인딩 상태 확인 ↓</h3>
        <h3>{JSON.stringify(setting.toJS())}</h3>
      </div>
    </>
  );
};

export default Create;