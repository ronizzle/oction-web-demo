import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let baseUrl  = 'http://localhost:3000/resources/feeds/'

ReactDOM.render(
    <App baseUrl={baseUrl}/>, document.getElementById('root'));
registerServiceWorker();
