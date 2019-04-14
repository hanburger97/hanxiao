import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.jsx';


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


library.add(fas);

const wrapper = document.getElementById('main');
wrapper ? ReactDOM.render((
    <Router>
        <App />
    </Router>
), wrapper) : false;
