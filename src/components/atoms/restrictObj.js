import styled from 'styled-components';
const RestrictObj = () => (
  <Styled>
    <div className="img-div">
      <img
        src={
          require('../../images/icons/icon_disadvantage/icon_disadvantage_sniperonly.png').default
        }
        alt=""
      />
    </div>
    <div className="contents-div">
      <span className="question-mark">？</span>
      <div>
        <span className="name">스나이퍼 분대</span>
      </div>
      <div>
        <button>선택</button>
      </div>
    </div>
  </Styled>
);

const Styled = styled.div`
  width: 110px;
  padding: 2px 8px 6px 8px;
  display: inline-block;
  font-size: 7pt;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #3d3d3d;
  opacity: 0.8;
  margin: 5px;
  height: 50px;
  word-break: keep-all;
  .img-div {
    width: 50%;
    display: inline-block;
  }
  .contents-div {
    height: 100%;
    width: 50%;
    display: inline-block;
  }
  .img-div img {
    width: 45px;
    padding-right: 5px;
    border-right: 1px solid gray;
  }
  .question-mark {
    float: right;
    padding: 1px 2px 1px 2px;
    font-size: 3pt;
    background-color: white;
    border-radius: 20px;
    color: black;
  }
  .name {
    padding: 1px 2px 1px 2px;
    font-size: 3pt;
    float: right;
  }
  button {
    float: right;
    cursor: pointer;
    font-size: 5pt;
    border-radius: 5px;
    border: 0;
    padding: 0;
    width: 25px;
  }
`;
export default RestrictObj;
