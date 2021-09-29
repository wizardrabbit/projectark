import { Switch, Route } from 'react-router-dom';
import { getURL } from '../utils/url';
import Menu from './menu';

const Main = () => (
  <div className="mid-wrapper">
    <div className="content-wrapper">
      <Switch id="content">
        <Route exact path={getURL('create')}>
          <Menu.Create />
        </Route>
        <Route exact path={getURL('record')}>
          <Menu.Record />
        </Route>
        <Route exact path={getURL('developers')}>
          <Menu.Developers />
        </Route>
        <Route exact path={getURL('guide')}>
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
