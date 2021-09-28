import { Switch, Route } from 'react-router-dom';
import Menu from './menu';

const Main = () => (
  <div className="mid-wrapper">
    <div className="content-wrapper">
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
    <div className="layout-pusher" />
  </div>
);

export default Main;

/*
<div id="content-deco-1" />
<div id="content-deco-2" />
*/
