import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      password diary
    </div>
  );



}

axios.get('http://localhost:4000/').then((response)=>{
  console.log(response);

})

export default App;
