import { Switch, Route } from 'react-router-dom';
import Menu1 from './menu/menu1';
import Menu2 from './menu/menu2';
import Menu3 from './menu/menu3';
import Menu4 from './menu/menu4';

const Main = () => (
  <div id="mid-wrapper">
    <div id="content-wrapper">
      <div id="content-deco-1" />
      <div id="content-deco-2" />
      <div id="content">
        <Switch id="content">
          <Route exact path="/menu1">
            <Menu1 />
          </Route>
          <Route exact path="/menu2">
            <Menu2 />
          </Route>
          <Route exact path="/menu3">
            <Menu3 />
          </Route>
          <Route exact path="/menu4">
            <Menu4 />
          </Route>
        </Switch>
      </div>
    </div>
    <div id="layout-pusher" />
  </div>
);

export default Main;
