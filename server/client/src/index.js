import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import App from './components/App';

import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

