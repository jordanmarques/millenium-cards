import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createConnect from 'overmind-react'
import * as state from './logic/state'
import * as actions from './logic/actions'

const app = new App({
    state,
    actions
  })
  
export const connect = createConnect(app)
export default app

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
