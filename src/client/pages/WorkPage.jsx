import React, { Component } from 'react';
import data from 'data';

class WorkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workData: {}
        }
    }

    componentWillMount() {
        const works = data.work;
        works.map((w) => {
            if (this.props.match.params.workId === w.id) {
                this.setState({
                    workData: w
                })
            }
        })
    }

    render() {
        return (
            <div>
                Work page
                {console.log(this.state.workData)}
            </div>
        )
    }
}

export default WorkPage;