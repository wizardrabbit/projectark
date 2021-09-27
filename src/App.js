import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainImage from './images/index.js';
import {Header, Blank, Main, Wrapper, Footer} from './components/menu.js';

function App() {
  return (
    <Router>
    	<Switch>
        <Route path="/" component={Page1} />
      </Switch>
    </Router>
  );
}

export default App;

function Page1() {
  return (
    <>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <Footer />
    </>
  );
}

// 이곳에서 어떤 내용이 앱에 들어가 출력될지가 결정됩니다.
