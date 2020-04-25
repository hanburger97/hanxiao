import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import MotivationPage from './pages/MotivationPage.jsx';


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/motivation' component={MotivationPage} />
                    <Route path='/' component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
