import { Link } from 'react-router-dom';
import MainImage from '../images/index.js';

const Header = () => (
  <header>
    <div id="header-menu">
      <Link to="/">
        <img id="title-logo" src={MainImage.title} alt="" />
      </Link>
      <Link to="/menu1" className="menu-a">
        작전 생성
      </Link>
      <Link to="/menu2" className="menu-a">
        작전 기록
      </Link>
      <Link to="/menu3" className="menu-a">
        개발자들
      </Link>
      <Link to="/menu4" className="menu-a">
        사용 가이드
      </Link>
    </div>
  </header>
);

export default Header;
