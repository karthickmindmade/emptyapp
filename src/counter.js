import React,{Component} from "react";
import Button from "./components/Button";

import "./css/style.css";


export default class Numbercounter extends Component {
  
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
 
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if(this.state.count <1 ){
      this.setState({
        count:0
      });
    }else {
      this.setState({
        count: this.state.count - 1
      });
    }
}

  render() {
    let { count } = this.state;
   
    
   
    return (
      <div>
        
      <div className="app">
    
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      
      </div>
      </div>
    );
  }
}
