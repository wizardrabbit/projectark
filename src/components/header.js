import { Link } from 'react-router-dom';
import MainImage from '../images';
import { getURL } from '../utils/url';

const Header = () => (
  <header>
    <div className="header-menu">
      <Link to={getURL('/')}>
        <img className="title-logo" src={MainImage.title} alt="" />
      </Link>
      <Link to={getURL('create')} className="menu-a">
        작전 생성
      </Link>
      <Link to={getURL('record')} className="menu-a">
        작전 기록
      </Link>
      <Link to={getURL('developers')} className="menu-a">
        개발자들
      </Link>
      <Link to={getURL('guide')} className="menu-a">
        사용 가이드
      </Link>
    </div>
  </header>
);

export default Header;
