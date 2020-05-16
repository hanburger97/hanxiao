import React, {Component } from 'react';

class Summary extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    return this.props.fetch({
      maxRecords: 100,
		  view: "Overall Summary"
    })
    .then(records => {
      return this.setState({
        data : records
      })
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.data)}
      </div>
    )
  }
}

export default Summary;