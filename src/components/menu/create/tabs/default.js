import Box from '../../../atoms/box';
import Img from '../../../../images/icon_ARK.png';
import Question from '../../../atoms/question';

const BoxItem = (props) => (
  <div className="d_ib w_50 h_100 v_middle">
    <div className="m_1">
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  </div>
);
const BoxThumbnail = (props) => (
  <img src={props.src} alt="" width="40px" className="m_1 c_pointer" />
);
const Default = () => (
  <>
    <Box height="20%" width="50%">
      <BoxItem title="당신의 이름은?">
        <input type="text" value="" />
        <h6>최대 8글자까지 가능합니다.</h6>
      </BoxItem>
      <BoxItem title="결제도장">
        <BoxThumbnail src={Img} />
        <BoxThumbnail src={Img} />
        <BoxThumbnail src={Img} />
        <BoxThumbnail src={Img} />
        <BoxThumbnail src={Img} />
        <Question
          onClick={() => {
            console.log('clicked');
          }}
        />
        <h6>원하는 이미지를 선택해 주세요.</h6>
      </BoxItem>
    </Box>
  </>
);

export default Default;
