import MainImage from '../images/index.js';

function Header() {
  return (
    <header>
      <div id = "header-menu">
        <img id = "title-logo" src = {MainImage.title}/>
        <a class = "menu-a">작전 생성</a>
        <a class = "menu-a">작전 기록</a>
        <a class = "menu-a">개발자들</a>
        <a class = "menu-a">사용 가이드</a>
      </div>
    </header>
  );
}

function Main() {
  return (
    <div id = "content-wrapper">
      <div id = "content-deco-1"></div>
      <div id = "content-deco-2"></div>
      <div id = "content"></div>
      <div id = "layout-pusher"></div>
    </div>
  );
}

function Blank() {
  return (
    <>
    </>
  )
}

function Wrapper(props) {
  return (
    <div id = "wrapper">
      {props.children}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div id = "footer-text">
        © 2021 Projekt ARK : Arknights Random Knit<br />
        이 웹사이트에서 다루는 게임 '명일방주' 에 대한 권리는 Hypergryph Co, Ltd와 YOSTAR LIMITED에 있습니다.
      </div>
    </footer>
  );
}

export {Header, Blank, Main, Wrapper, Footer}
