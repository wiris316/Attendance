import React from "react";
// import ReactDOM from "react-dom";
import App from '../components/App.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { render } from 'react-dom';
import StudentCard from '../components/StudentCard';



render(
  // <BrowserRouter>
    <App/>,
  document.getElementById('root')
)



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