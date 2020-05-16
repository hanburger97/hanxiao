import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AirtableConsumer } from '../contexts/AirtableContext.jsx';

import Summary from '../components/Fitness/Summary.jsx';

class FitnessProfilePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <AirtableConsumer>
            {({fetch}) => (
              <div>
                <h1>
                  Hello
                </h1>
                <Summary fetch={fetch} />
              </div>
            )}
          </AirtableConsumer>
        )
    }
}

export default FitnessProfilePage;