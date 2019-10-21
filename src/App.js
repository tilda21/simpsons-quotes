import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import Quotes from "./Quotes";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const work = this.state.working? "working": "break";
    const move = this.state.working? "App-logo" : "App-logo-stop" ;
    console.log(work);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={move} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button
          onClick={this.handleClick} className={work}>
            {work}
        </button>
        </header>
        
       
        <Quotes/>
      </div>
    );
  }
}

export default App;