import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
// import registerServiceWorker from './serviceWorker';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import { setupWorker, rest } from 'msw'
const { worker } = require('./mocks/browser')
if (process.env.NODE_ENV === 'development') {
console.log(process.env.NODE_ENV)
  worker.start()
}
// const renderApp = () =>
//   worker.start().then(() => {
//     worker.printHandlers();
//     ReactDOM.render(<Root />, document.getElementById('root'));
//   });

// renderApp();
ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
// registerServiceWorker();