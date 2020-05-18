import React, {Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import palette from '../../global.js';
import { Container } from '../Common.jsx';

import { FitnessCalendar, PieChart, RadarChart } from './Charts.jsx';

const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
);

class Summary extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    return this.props.fetch({
		  view: "Overall Summary"
    })
    .then(records => {
      return this.setState({
        data : records.map(x =>x.fields)
      })
    });
  }


  formatCalendarData() {
    let d = groupBy(this.state.data, "Date");
    const dates = Object.keys(d);
    let res = [];
    dates.forEach(date => {
      res.push({
        day: date,
        value: d[date].length
      })
    });
    return res;
  }

  formatPieChartData(key) { 
    const tmp = groupBy(this.state.data, key);
    const types = Object.keys(tmp);
    return types.map(x => ({
      id: x, 
      label: x,
      value: tmp[x].length
    }));
  }

  formatRadarChartData(key) {
    const tmp = groupBy(this.state.data, key);
    let exercises = Object.keys(tmp);
    exercises.sort((a, b) =>  tmp[b].length - tmp[a].length);
    exercises = exercises.slice(0, 6);
    return exercises.filter(x => x !== "Run").map(x => ({
      exercise: x,
      frequency: tmp[x].length,
      reps: (tmp[x].reduce((sum, el) => (sum+el["Reps"]), 0) / 100 / tmp[x].length)
    }));
  }

  totalDistanceRan() {
    return this.state.data.filter(x => x["Exercise"] === "Run").reduce((sum, el) => (sum + el["Distance (km)"]), 0);
  }
  totalPushups() {
    return this.state.data.filter(x => x["Exercise"] == "Push-ups").reduce((sum, el) => (sum + el["Reps"]), 0);
  }
  totalWorkouts() {
    return Object.keys(groupBy(this.state.data, "Date")).length;
  }

  render() {
    return (
      <Container color={palette.midnight_green}>
            <h2>Overview</h2> <br/>
        <Row>
          <Col md={{span: 2, offset: 3}} >
            <h4>{this.totalPushups()}</h4>
            <h5>push-ups in total</h5>
          </Col>
          <Col md={2}>
            <h4>{this.totalDistanceRan()}</h4>
            <h5>km ran in total</h5>
          </Col>
          <Col md={2}>
            <h4>{this.totalWorkouts()}</h4>
            <h5>workouts in total</h5>

          </Col>
        </Row>
        <br/><br/>
        <Row >
          <Col md={{span: 10, offset: 1}}>
          <h3>Activity calendar</h3>
          <p>This activity calendar shows the number of exercises/activities done during a given day.
            A single activity is defined as a single exercise such as push-ups. A run is considered a single activity, therefore
            this calendar does not take into account intensity per workout per day.
          </p>
          <div style={{height: "28vh"}}>
           <FitnessCalendar data={this.formatCalendarData()} style={{height: "25vh"}} />
          </div>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col md={{span: 5, offset: 1}} style={{textAlign: "right"}}>
            <h3 style={{textAlign: "right"}}>Breakdown of activity targets</h3>
            <br/>
            <p>
              This is a breakdown per frequency of activies targeting each specific goal. In other words, each activity or exercise is mapped
              to a specific target, in the case of many targets per activity, it is resolved to the most significant one. (E.g. a "push-up" activity will 
              resolve to "chest" target instead of "triceps" or other secondary targets).
            </p>
            <br/>

            <div  style={{height: "50vh"}}>
              <RadarChart data={this.formatRadarChartData("Exercise")} keys={["frequency", "reps"]} style={{height: "50vh"}}/>
            </div>
          </Col>
          
          <Col md={5}>
            <div  style={{height: "40vh"}}>

            <PieChart data={this.formatPieChartData("Target")}  style={{height: "40vh"}}  />
            </div>
            <br/> <br/> <br/> <br/> <br/> 

            <h3 style={{textAlign: "left"}}>A look at the top 5 body-weights activities</h3>
            <p>
              Given the top 5 most frequent body-weights exercises, this breakdown consists of their frequencies in terms of training days and their
              average number of repetitions in hundreds (100). To compute the average number of repitions, we have taken the total number of reps over the 
              frequency then divide by 100.
            </p>
          </Col>

          
          
        </Row>

      </Container>

    )
  }
}

export default Summary;