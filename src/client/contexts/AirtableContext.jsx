import React, { Component, createContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Airtable = require('airtable');

const airtableContext = createContext();

class AirtableContext extends Component {
  
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      fetch: this.fetch,
    };
  }

  componentWillMount(){

  }

  fetch(args){

  }

  render() {
      return (
          <airtableContext.Provider>
            {this.props.children}
          </airtableContext.Provider>
      )
  }
}