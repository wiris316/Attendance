import React, {useState, useEffect} from 'react';

const Square = (props) => {
  const { id, fName, lName } = props;
  let [checked, markChecked] = useState(localStorage.getItem(`square_${id}`) || '')

  useEffect(() => {
    localStorage.setItem(`square_${id}`, checked);
  }, [id, checked]);

  return (
    <div className="square" onClick={() => markChecked(checked === '✔️'? '' : '✔️')}>{checked}</div>
  );
};



export default Square;
