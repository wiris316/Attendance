import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const DeleteStudent = prop => {
  const [fName, setfName] = useState('');
  
  const handleDelete = (e) => {
    console.log(prop)
  //     fetch('/students/delete', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({firstname: fName})
  //   })
  //   .catch(err=> console.log('Error handling delete'))
  //   // console.log('rowowowow')
  }

  return (
    <button onClick={handleDelete}>DELETE HERE</button>
    )

}
  
export default DeleteStudent