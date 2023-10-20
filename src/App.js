import ClearButton from "./ClearButton.js"
import ValueButton from "./ValueButton.js"
import OperatorButton from "./OperatorButton.js"
import EnterButton from "./EnterButton.js"
import ZeroButton from "./Zero.js"

function App() {

  return (
    <div className="calculator">
        <div className="screen">

        </div>
        <div className="buttonContainer">
          <div className="row">
            <ClearButton className="normal" value="AC"/>
            <ClearButton className="normal" value="C"/>
            <OperatorButton className="normal" value="/"/>
            <OperatorButton className="normal" value="X"/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="7"/>
            <ValueButton className="normal" value="8"/>
            <ValueButton className="normal" value="9"/>
            <OperatorButton className="normal" value="-"/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="4"/>
            <ValueButton className="normal" value="5"/>
            <ValueButton className="normal" value="6"/>
            <OperatorButton className="normal" value="+"/>
          </div>
          <div className="row">
            <ValueButton className="normal" value="1"/>
            <ValueButton className="normal" value="2"/>
            <ValueButton className="normal" value="3"/>
            <OperatorButton className="normal" value="%"/>
          </div>  
          <div className="row">
            <ZeroButton className="normal" value="0"/>            
            <ValueButton className="normal" value="."/>
            <EnterButton className="normal" value="="/>
          </div>       
        </div>
    </div>
  );
}

export default App;
