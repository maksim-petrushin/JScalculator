const OperatorButton = (props)=>{

    return(
        <button value={props.value} className="normal" onClick={props.handle}>{props.value} </button>
    )
}

export default OperatorButton;