import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import BaseRoute from '../components/BaseRoute';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/404';

class AppRouter extends React.Component {
  componentDidMount

  render() {
    return (
      <Switch>
        <BaseRoute exact path="/" layout={MainLayout} component={Home} />
        <BaseRoute exact path="/:movie_id-:slug" layout={MainLayout} component={Detail} />
        <BaseRoute exact path="/:404" layout={MainLayout} component={NotFound} />
        <BaseRoute layout={MainLayout} component={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default AppRouter;
