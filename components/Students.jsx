import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StudentCard from './StudentCard';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: []
    }
  }
  
  componentDidMount() {
    // const Roster =[];
    fetch('/students')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({roster: data})
      })
      .catch(err=> console.error(err))
  }
  
  render() {
    const data = []
    for (let i = 0; i < this.state.roster.length; i++) {
      data.push(<StudentCard fName={this.state.roster[i].firstname} lName={this.state.roster[i].lastname} Absent={this.state.roster[i].absence} Present={this.state.roster[i].present} /> )
    }

    return (
      <div className="container">
        {data}
      </div>
    )
  }

}

export default Students;
