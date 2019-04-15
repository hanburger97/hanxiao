import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import WorkPage from './pages/WorkPage.jsx';
import Card from './components/Card.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>

                    <Route path='/work/:workId' component={WorkPage} />
                    <Route path='/project/:projectId' component={HomePage} />
                    <Route path='/' component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
