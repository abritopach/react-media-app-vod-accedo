import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
//import routes from './routes';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

// Initialize store
const store = configureStore();

// We require the routes and render to the DOM using ReactDOM API.
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
