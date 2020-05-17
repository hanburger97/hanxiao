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
              <>
                <Summary fetch={fetch} />
              </>
            )}
          </AirtableConsumer>
        )
    }
}

export default FitnessProfilePage;