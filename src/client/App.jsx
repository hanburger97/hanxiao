import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import ErrorLayerBoundary from './contexts/ErrorBoundary.jsx';

import AirtableContext from './contexts/AirtableContext.jsx';

import HomePage from './pages/Home.jsx';
import MotivationPage from './pages/MotivationPage.jsx';
import FitnessProfilePage from './pages/FitnessProfile.jsx';



class App extends Component {
    render() {
        return (
            <ErrorLayerBoundary>
                <AirtableContext>
                    <Switch>
                        <Route path='/motivation' component={MotivationPage} />
                        <Route path="/fitness-profile" component={FitnessProfilePage}/> 
                        <Route path='/' component={HomePage} />
                    </Switch>
                </AirtableContext>
            </ErrorLayerBoundary>
        )
    }
}

export default withRouter(App);
