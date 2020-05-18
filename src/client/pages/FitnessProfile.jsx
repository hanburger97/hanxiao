import React, { Component } from 'react';
import { Container } from '../components/Common.jsx';
import { AirtableConsumer } from '../contexts/AirtableContext.jsx';
import { Row, Col} from 'react-bootstrap';
import { Badge, Breadcrumb, BreadcrumbItem } from "shards-react";
import palette from '../global.js';
import axios from 'axios';

import Summary from '../components/Fitness/Summary.jsx';
import Running from '../components/Fitness/Running.jsx';

class WellnessProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          live: false,
          updatedAt: ""
        }
    }

    componentWillMount(){
      //return axios.get("/proxy/healthcheck")
      return axios.get("https://us-central1-myfirstproject-13ebe.cloudfunctions.net/proxy/healthcheck")
      .then(res => {
        return this.setState({
          live: true,
          updatedAt: new Date()
        })
      })
      .catch(err => {
        console.error(err);
        return this.setState({
          live: false
        })
      })

    }

    render() {
        return (
          <AirtableConsumer>
            {({fetch}) => (
              <>
                <Container color={palette.forest_green}>
                <Row>
                  <Col md={{span: 8, offset: 2}}>  
                    <h1 style={{fontWeight : "300"}}><strong>Wellness</strong> Profile 💪</h1>
                    <h5>My personal live dashboard for health and wellness metrics</h5>
                    <p>
                      This is a live dashboard summarizing my health and wellness metrics during this COVID-19 quarantine. The purpose of this is to share my progress and to 
                      hold myself accountable for staying active and well. <br/>
                      
                    </p>
                    <Badge theme={this.state.live ? "success" : "danger"}>Live data</Badge>  Last fetched from Airtable API at {this.state.updatedAt.toString()}
                    <br/>
                    Made by <strong>Han Xiao</strong> with @nivo library and personal data stored in airtable.
                  </Col>
                </Row>
                <br/>

                </Container>
                <Summary fetch={fetch} />
                <Running fetch={fetch} />
              </>
            )}
          </AirtableConsumer>
        )
    }
}

export default WellnessProfilePage;