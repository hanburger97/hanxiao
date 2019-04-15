import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Timeline from '../components/Timeline.jsx';
import Projects from '../components/Projects.jsx';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Timeline />
                <Projects />
            </div>
        )
    }
}

export default HomePage;