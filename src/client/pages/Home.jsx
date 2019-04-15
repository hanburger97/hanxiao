import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Timeline from '../components/Timeline.jsx';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Timeline />
            </div>
        )
    }
}

export default HomePage;