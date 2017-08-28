import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
//import routes from './routes';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// We require the routes and render to the DOM using ReactDOM API.
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
