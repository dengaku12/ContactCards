import React, {Component} from "react";
import ContactCard from "./ContactCard";
import './App.css';

class App extends Component{
  render(){
    return (
      <>
        <ContactCard
          name = "Dark Pit"
          mobile = "080232590"
          work = "99999999969"
          email = "electroshock12@gmail.com"
        />
        <ContactCard
          name = "Young Link"
          mobile = "82693455"
          work = "911"
          email = "majoras_mask420@gmail.com"
        />
        <ContactCard
          name = "Lucina"
          mobile = "44444444444"
          work = "311"
          email = "awakening69@gmail.com"
        />
      </>
    )
  }
}



export default App;
