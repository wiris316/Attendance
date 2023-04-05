import React from "react";
// import ReactDOM from "react-dom";
import App from '../components/App.jsx';
import { render } from 'react-dom';


// const { Client } = require("pg")
// const dotenv = require("dotenv")
// dotenv.config();

// const connectDb = async () => {
//   try {
//     const client = new Client({
//       user: process.env.PGUSER
//     })
//   }
// }




// ReactDOM.render('hiii', document.getElementById('root'));
render(
  <App/>,
  document.getElementById('root')
)