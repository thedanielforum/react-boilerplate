import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import withTracker from './utils/withTracker';

import Wrapper from './application/components/AppWrapper';

// Pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

class Routes extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/" component={withTracker(Home)} />
          <Route component={withTracker(PageNotFound)} />
        </Switch>
      </Wrapper>
    );
  }
}

export default Routes;
