import React,{Component} from "react";
import Button from "./components/Button";
import Navbar from "./components/navbar";
import "./css/style.css";
import { Link } from "react-router-dom";

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
         <Navbar
         navlinks1={ <a className="nav-link active" aria-current="page" href="/" >Home</a>}
         navlinks2={<Link className="nav-link active" to="/about">About</Link>}
         navlinks3={<Link className="nav-link active" to="/blogs">blogs</Link>}
        />
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
