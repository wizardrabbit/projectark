const Record = () => (
  <>
    <div className="content-deco-1" />
    <div className="content-deco-2" />
    <div className="content record-left">
      <div className="record-title">
        <p>AUTHORIZED ONLY</p>
        <p>RESTRICTED INFORMATION</p>
      </div>
      <div className="record-author" />
      <div className="record-date" />
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
