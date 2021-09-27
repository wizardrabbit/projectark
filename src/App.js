import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

const App = () => (
  <Router>
    <div id="wrapper">
      <Header />
      <Main />
    </div>
    <Footer />
  </Router>
);

export default App;

// 이곳에서 어떤 내용이 앱에 들어가 출력될지가 결정됩니다.
