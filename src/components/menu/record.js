import React, { useState } from 'react';
import warninglogo from '../../images/icons/icon_ui/icon_ui_warning-bg.png';

const Record = () => (
  <>
    <div className="content-deco-1" />
    <div className="content-deco-2" />
    <div className="content record-left">
      <div className="record-title">
        <p>AUTHORIZED ONLY</p>
        <p>RESTRICTED INFORMATION</p>
      </div>
      <div className="record-author">
        <p>총책임자 : 켈시</p>
        <p>현장지휘관 : 닉네임은여덟글자</p>
      </div>
      <div className="record-date">
        <p>작전일자 : 2000 - 01 - 01</p>
      </div>
      <div className="content record-info">
        <div className="title record-info">CENSORED</div>
        <div className="record-opnumber">CENSORED</div>
        <div className="data-record-info">
          <div className="warning-msg">
            <img className="warning-image" src={warninglogo} alt="경고 메시지" />
            <div className="warning-text">
              <p>박사, 작전 기록 열람을 허가한다.</p>
              <p>우측의 보고서 목록을 클릭하여 확인하도록.</p>
              <p>- Dr. 켈시</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content record-restriction">
        <div className="title">CENSORED</div>
        <div className="data-record-restriction"></div>
      </div>
      <div className="content record-score">
        <div className="title">CENSORED</div>
        <div className="data-record-score">■■■</div>
      </div>
    </div>
    <RecordMenu />
  </>
);

const RecordMenu = () => (
  <div className="content record-right">
    <div className="title">작전 보고서 목록</div>
    <div
      className="data-record-list"
      style={{ width: '100%', height: '450px', backgroundColor: 'rgb(0, 0, 255, 0.2)' }}
    ></div>
  </div>
);
/*const RecordMenu = () => {
  return (
    <div className="content record-right">
      <div className="title">작전 보고서 목록</div>
      <div
        className="data-record-list"
        style={{ width: '100%', height: '450px', backgroundColor: 'rgb(0, 0, 255, 0.2)' }}
      ></div>
    </div>
  );
};*/

export default Record;
