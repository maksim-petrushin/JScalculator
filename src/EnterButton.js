const EnterButton = (props)=>{

    return(
        <button className="normal" onClick={props.handleOperation}>{props.value}</button>
    )
}

export default EnterButton;