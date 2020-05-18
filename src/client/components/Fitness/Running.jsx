import React, {Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import palette, { groupBy } from '../../global.js';
import { Container } from '../Common.jsx';

import {LineChart} from './Charts.jsx';

class Running extends Component {
  constructor(props) {
    super(props);
    this.computeTimeSeries = this.computeTimeSeries.bind(this);
    this.state = {
      data: [],
      avgTime: 0,
      avgPace: 0,
      avgDist: 0,
    }
  }

  componentWillMount() {
    return this.props.fetch({
      view: "Running Summary"
    })
    .then(records => {
      return this.setState({ 
        data: records.map(x => x.fields).filter(x => x["Exercise"] === "Run")
      })
    })
    .then(() => {
      return this.computeAverages();
    })
  }

  computeTimeSeries() {
    let tmp = groupBy(this.state.data, "Date")
    let dates = Object.keys(tmp).sort()
    dates = dates.slice(dates.length - 10, dates.length);
    return [
      {
        id: "pace",
        data: dates.map(d => ({
          x : d,
          y : (tmp[d][0]["Pace"] / 60)
        }))
      },
      {
        id: "distance",
        data: dates.map(d => ({
          x : d,
          y : tmp[d][0]["Distance (km)"]
        }))
      }
    ]
  }


  computeAverages() {
    let data = this.state.data;
    return this.setState({
      avgDist: (data.reduce((sum, el) => (sum+el["Distance (km)"]), 0) / data.length),
      avgPace: (data.reduce((sum, el) => (sum+el["Pace"]), 0) / data.length),
      avgTime: (data.reduce((sum, el) => (sum+el["Duration"]), 0) / data.length)
    })
    
  }

  render() {
    return (
      <Container color={palette.violentBlue}>
        <h2>Running</h2>
      
        <Row>
          <Col md={{span: 8, offset: 1}}>
            <div style={{height: "55vh"}} >
              <LineChart data={this.computeTimeSeries()} style={{height: "55vh", width: "100%"}}/>
            </div>
            <h4>Distance and pace per run over time (last 10 runs)</h4>
            <p>A look at the running distance in km over each run and the corresponding pace for the 10 most recent runs. The pace is calculated from the total time of a run divided
              by its distance to obtain in minutes per km. The target is to maintain a pace under 5'30" per km. Note: the 2 lines on the graph are stacked, hence the 
              distance line is offsetted from the pace line, which makes the Y axis not representative of the actual value.
              Also note: the x axis is not to scale with time.
            </p>
          </Col>
          <Col md={2}>
            <div style={{height: "25vh"}}>

            </div>
            <h5>Average pace overall</h5>
            <h4>{Math.floor(this.state.avgPace / 60)}'{Math.floor(this.state.avgPace % 60)}" min/km</h4>
            <br/>

            <h5>Average distance per run overall</h5>
            <h4>{Math.round(this.state.avgDist * 100) / 100} km</h4>
            <br/>

            <h5>Average time per run overall</h5>
            <h4>{Math.floor(this.state.avgTime / 60)}'{Math.floor(this.state.avgTime % 60)}" min</h4>
            <br/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Running;