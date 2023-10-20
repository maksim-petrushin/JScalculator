const EnterButton = (props)=>{

    return(
        <button className="enter" onClick={props.handleOperation}>{props.value}</button>
    )
}

export default EnterButton;