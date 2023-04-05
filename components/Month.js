import React from 'react';
import Square from './Square'
import Row from './Row'

function Month (props) {
  let Month = []
  for (let i = 1; i <= 5; i++) {
  Month.push(<Row className="Row" key={i}/>)
  }
  return (
    <div className="Month">
      {Month}
    </div>
  );
};

export default Month;