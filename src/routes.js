import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';

// Map components to different routes.
// The parent component wraps other components and thus serves as the entrance to other React components.
// IndexRoute maps HomePage component to the default route.
export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/home' component={HomePage}/>
    </Switch>
);
