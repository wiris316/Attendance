import React, {useEffect} from 'react';
import {useState} from 'react';
import Square from './Square'

function Row(props) {
  const [fName, setfName] = useState([])

  useEffect(() => {
    fetch('/students')
      .then(res => res.json())
      .then(data => {
        setfName(data)
      })
      .catch(err=> console.log('Error with useEffect in Row component'))
  },[])

  // const { fName, lName } = props;
  
  // let allNames = []
  // fName.forEach(ele => allNames.push(<div id="attendance-sheet-name">{ele.firstname}</div>))
  
  console.log('heeeeere', fName)
  
  let Rows = []
  for (let i = 1; i <= 5; i++) {
  Rows.push(<Square className="square" squareID={i}/>)
  // if (i ===5 || i === 10 || i === 15)Rows.push(<div>'   '</div>)
  }
  
  return (
    <div className="row">
      {fName.map((ele)=> <div class='attendance-names'>{ele.firstname}{Rows}</div>)}

    </div>
  );
};




export default Row;