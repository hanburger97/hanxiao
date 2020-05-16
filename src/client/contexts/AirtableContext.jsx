import React, { Component, createContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

const airtableContext = createContext();

class AirtableContext extends Component {
  
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      fetch: this.fetch,
    };
  }

  fetch(query){
    return axios({
      method: 'get',
      url: '/api/airtable',
      data: query
    })
    .catch(err => {
      console.error(err);
      return [err];
    });
  }

  render() {
    return (
      <airtableContext.Provider value={this.state}>
        {this.props.children}
      </airtableContext.Provider>
    )
  }
}

export const AirtableConsumer =  airtableContext.Consumer;

export default AirtableContext;