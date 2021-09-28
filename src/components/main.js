import { Switch, Route } from 'react-router-dom';
import Menu from './menu';

const Main = () => (
  <div id="mid-wrapper">
    <div id="content-wrapper">
      <div id="content-deco-1" />
      <div id="content-deco-2" />
      <div id="content">
        <Switch id="content">
          <Route exact path="/create">
            <Menu.Create />
          </Route>
          <Route exact path="/record">
            <Menu.Record />
          </Route>
          <Route exact path="/developers">
            <Menu.Developers />
          </Route>
          <Route exact path="/guide">
            <Menu.Guide />
          </Route>
        </Switch>
      </div>
    </div>
    <div id="layout-pusher" />
  </div>
);

export default Main;
