import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import Card from './components/Card.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
}

export default withRouter(App);
