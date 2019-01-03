import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css'
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

ReactDOM.render(
    <BrowserRouter>
        <App history={history} />
    </BrowserRouter>
, document.getElementById('root'));

