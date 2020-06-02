import React, {Component} from "react";
import './App.css';

class Cheese extends Component{
  render(){
    return <h1>I like Cheese</h1>;
  }
}
class App extends Component{
  render(){
    return <Cheese />;
  }
}



export default App;
