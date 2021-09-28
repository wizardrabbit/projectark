import { Link } from 'react-router-dom';
import MainImage from '../images/index.js';

const Header = () => (
  <header>
    <div id="header-menu">
      <Link to="/">
        <img id="title-logo" src={MainImage.title} alt="" />
      </Link>
      <Link to="/create" className="menu-a">
        작전 생성
      </Link>
      <Link to="/record" className="menu-a">
        작전 기록
      </Link>
      <Link to="/developers" className="menu-a">
        개발자들
      </Link>
      <Link to="/guide" className="menu-a">
        사용 가이드
      </Link>
    </div>
  </header>
);

export default Header;
