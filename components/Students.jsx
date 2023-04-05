import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StudentCard from './StudentCard';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      Absent: 0,
      Present: 0
    }
  }
}