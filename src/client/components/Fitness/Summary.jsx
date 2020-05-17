import React, {Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import palette from '../../global.js';
import { Container } from '../Common.jsx';

import { FitnessCalendar, PieChart } from './Charts.jsx';

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

  render() {
    return (
      <Container color={palette.midnight_green}>
        <Row>
          <Col md={{span: 8, offset: 2}}>  
            <h1 style={{fontWeight : "300"}}>My personal fitness <br/> <strong>dashboard</strong> 💪🔥</h1>
            <p>
              This is a live dashboard summary to track my physical activities during COVID-19 quarantine. The purpose of this is to share my progress and to 
              hold myself accountable for staying in shape and being active. It is built using @nivo JS library for graphing and charting, and airtable API 
              for pulling and keeping track of my physical activities data. If you would like a similar dashboard on your website, feel free to reach out at yhxiao97@gmail.com.
            </p>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        
        <Row>
          <Col md={{span: 8, offset: 2}} >
          <h3>Activity calendar</h3>
          <p>This activity calendar shows the number of exercises/activities done during a given day.</p>
          <div style={{height: "28vh"}}>
           <FitnessCalendar data={this.formatCalendarData()} style={{height: "25vh"}} />
          </div>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col md={{span: 4, offset: 2}}>
            <h3>Breakdown of activity targets</h3>
            <br/>
            <p>
              This is a breakdown per frequency of activies targeting each specific goal. In other words, each activity or exercise is mapped
              to a specific target, in the case of many targets per activity, it is resolved to the most significant one. (E.g. a "push-up" activity will 
              resolve to "chest" target instead of "triceps" or other secondary targets).
            </p>
          </Col>
          
          <Col md={6}>
            <div  style={{height: "35vh"}}>

            <PieChart data={this.formatPieChartData("Target")}  style={{height: "35vh"}} />
            </div>
          </Col>
          
        </Row>

      </Container>
    )
  }
}

export default Summary;