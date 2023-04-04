import React, {useState} from 'react';

const Square = (props) => {
  let [checked, markChecked] = useState()

  return (
    <div className="square" onClick={() => markChecked(checked === '✔️'? '' : '✔️')}>{checked}</div>
  );
};



export default Square;
