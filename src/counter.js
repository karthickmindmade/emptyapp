import React,{Component} from "react";


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
      <div className="counter-body">
        
    
    
       
         
            
            
        
         
            <button className="cart-btn" title={"-"} onClick={this.decrementCount}>-</button>
            <h1>{count}</h1>
            <button  className="cart-btn" title={"+"} onClick={this.incrementCount}>+</button>
         
       
      
    
      </div>
    );
  }
}
