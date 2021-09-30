import React from 'react';
import cx from 'classnames';
import Tabs from './tabs';

const Create = () => {
  const [selected, setSelected] = React.useState(1);

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
        <div className="h-100">
          {selected === 1 && <Tabs.Default />}
          {selected === 2 && <Tabs.Restrict />}
          {selected === 3 && <Tabs.Additional />}
        </div>
      </div>
    </>
  );
};

export default Create;
