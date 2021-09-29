const Record = () => (
  <>
    <div className="content-deco-1" />
    <div className="content-deco-2" />
    <div className="content record-left">
      <div id="record-title">
        AUTHORIZED ONLY
        <br />
        RESTRICTED INFORMATION
      </div>
      <div id="record-author" />
      <div id="record-date" />
      <div className="content record-info" />
      <div className="content record-restriction" />
      <div className="content record-score" />
    </div>
    <div className="content record-right"></div>
  </>
);

/*
ID 접근 방법 :
기록 이름 -> record-title
기록 작성자 -> record-author
기록 날짜 -> record-date
*/

export default Record;
