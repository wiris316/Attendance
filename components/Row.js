import React from 'react';
import Square from './Square'

function Row (props) {
  let Rows = []
  for (let i = 1; i <= 20; i++) {
  Rows.push(<Square className="square" square={i}/>)
  if (i ===5 || i === 10 || i === 15)Rows.push(<div>'   '</div>)
  }
  return (
    <div className="row">
      {Rows}
    </div>
  );
};

export default Row;