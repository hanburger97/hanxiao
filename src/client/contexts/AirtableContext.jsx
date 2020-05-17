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
      url: 'https://us-central1-myfirstproject-13ebe.cloudfunctions.net/proxy/airtable',
      //url: "/proxy/airtable",
      data: query
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
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