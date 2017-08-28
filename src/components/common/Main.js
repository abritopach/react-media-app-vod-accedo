import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
    </Switch>
);

export default Main;