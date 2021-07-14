import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import { publickRoutes } from '../../routes';
import { MAIN_ROUTE } from '../../utils/consts';

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <Switch>
        {publickRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
    </div>
  );
};

export default App;
