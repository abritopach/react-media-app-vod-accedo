import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import HistoryPage from '../HistoryPage';

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/history' component={HistoryPage}/>
    </Switch>
);

export default Main;