import { Component } from 'react';
import './App.css';
import Card  from './Card.js';

class App extends Component {
  render(){
  return (
    <div className="App">
        <div className="heading">
             <h1>React App</h1>
         </div>   
     <div className="container">
          <div className="ctn-content">
              <Card/> 
              <Card/>
              <Card/>
              <Card/>
          </div>
       </div>
    </div>
  );
  }
}

export default App;
