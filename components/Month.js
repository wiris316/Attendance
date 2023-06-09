import React from 'react';
import Square from './Square'
import Row from './Row'

function Month(props) {
  const { fName, lName } = props;
  let Month = []
  for (let i = 1; i <= 1; i++) {
    Month.push(<Row className="Row" key={i} fName={fName} lName={lName} />)
  }
  return (
    <div className="Month">
      <h1 id="attendance-header">Weekly Attendance Sheet</h1><br/>
      {Month}
    </div>
  );
};

export default Month;