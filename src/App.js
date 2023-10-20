import ClearButton from "./ClearButton.js"
import ValueButton from "./ValueButton.js"
import OperatorButton from "./OperatorButton.js"
import EnterButton from "./EnterButton.js"
import ZeroButton from "./Zero.js"
import React from "react"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstVal: "",
      secondVal: "",
      result: "",
      operator: "",
      equation: ""
    }
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSecond = this.handleSecond.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDelete(){
    this.setState({
      firstVal: "",
      secondVal: "",
      result: " ",
      operator: "",
      equation: "",
    })
  }
  
  handleNumber(event){
    this.setState((state)=>{

      return {
        firstVal: state.firstVal.concat(event.target.value),
        equation: state.firstVal.concat(event.target.value)+state.operator
      }
    })
  }
  handleSecond(event){
    this.setState((state)=>{
      return {
        secondVal: state.secondVal.concat(event.target.value),
        equation: state.firstVal+state.operator+state.secondVal.concat(event.target.value)
      }
    })
  }
  handleOperator(event){
    this.setState((state)=>({
        operator: event.target.value,
        equation: state.firstVal+event.target.value
    }))
  }
  handleOperation(){
    this.setState((state)=>{
      if(state.operator === "X"){
        return {result: parseFloat(state.firstVal)*parseFloat(state.secondVal),
          firstVal: ""+(parseFloat(state.firstVal)*parseFloat(state.secondVal)),
          secondVal: "",
          operator: "",
          equation: state.firstVal+state.operator+state.secondVal+"="+(parseFloat(state.firstVal)*parseFloat(state.secondVal))}
      }
      else if(state.operator === "/"){
        return {result: parseFloat(state.firstVal)/parseFloat(state.secondVal),
        firstVal: ""+(parseFloat(state.firstVal)/parseFloat(state.secondVal)),
        secondVal: "",
        operator: "",
        equation: state.firstVal+state.operator+state.secondVal+"="+(parseFloat(state.firstVal)/parseFloat(state.secondVal))}
      }
      else if(state.operator === "+"){
        return {result: parseFloat(state.firstVal)+parseFloat(state.secondVal),
          firstVal: ""+(parseFloat(state.firstVal)+parseFloat(state.secondVal)),
          secondVal: "",
          operator: "",
          equation: state.firstVal+state.operator+state.secondVal+"="+(parseFloat(state.firstVal)+parseFloat(state.secondVal))}
      }
      else if(state.operator === "-"){
        return {result: ""+(parseFloat(state.firstVal)-parseFloat(state.secondVal)),
          firstVal: ""+(parseFloat(state.firstVal)-parseFloat(state.secondVal)),
          secondVal: "",
          operator: "",
          equation: state.firstVal+state.operator+state.secondVal+"="+(parseFloat(state.firstVal)-parseFloat(state.secondVal))}
      }
      else if(state.operator === "%"){
        return {result: parseFloat(state.firstVal)%parseFloat(state.secondVal),
          firstVal: ""+(parseFloat(state.firstVal)%parseFloat(state.secondVal)),
          secondVal: "",
          operator: "",
          equation: state.firstVal+state.operator+state.secondVal+"="+(parseFloat(state.firstVal)%parseFloat(state.secondVal))}
      }
      
    })
  }

  render(){

  
  return (
    <div className="calculator">
        <div className="screen">
          <div className="show">{this.state.firstVal}</div>
          <div className="show">{this.state.secondVal}</div>
          <div className="show">{this.state.equation}</div>
          <div className="show">{this.state.operator}</div>
        </div>
        <div className="buttonContainer">
          <div className="row">
            <ClearButton className="delButton" value="AC" handleDelete={this.handleDelete} state={this.state}/>
            <OperatorButton className="normal" value="/" handle={this.handleOperator} state={this.state}/>
            <OperatorButton className="normal" value="X" handle={this.handleOperator} state={this.state}/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="7" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="8" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="9" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <OperatorButton className="normal" value="-" handle={this.handleOperator} state={this.state}/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="4" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="5" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="6" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <OperatorButton className="normal" value="+" handle={this.handleOperator} state={this.state}/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="1" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="2" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <ValueButton className="normal" value="3" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <OperatorButton className="normal" value="%" handle={this.handleOperator} state={this.state}/>
          </div>  
          <div className="row">
            <ZeroButton className="normal" value="0" handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>            
            <ValueButton className="normal" value="." handle={this.handleNumber} handleSecond={this.handleSecond} state={this.state}/>
            <EnterButton className="normal" value="=" state={this.state} handleOperation={this.handleOperation}/>
          </div>       
        </div>
    </div>
  );
  }
}

export default App;
