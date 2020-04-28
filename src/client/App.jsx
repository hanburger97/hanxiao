import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import MotivationPage from './pages/MotivationPage.jsx';

const ExperciseLog = (props) => {
    return <>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrz0KF2FKQ1Qgah6?backgroundColor=gray" 
        frameBorder="0" onMouseWheel="" width="100%" height="800rem" style={{background: "transparent", border: "1px solid #ccc"}}/>
    </>
};



class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/motivation' component={MotivationPage} />
                    <Route path="/log" component={ExperciseLog}/> 
                    <Route path='/' component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
