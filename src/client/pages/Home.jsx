import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Timeline from '../components/Timeline.jsx';
import Projects from '../components/Projects.jsx';
import LifeStory from '../components/LifeStory.jsx';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <LifeStory />
            </div>
        )
    }
}

export default HomePage;