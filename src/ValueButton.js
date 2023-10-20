const ValueButton = (props)=>{
    let handleMe;
        if(props.state.firstVal !== "" && props.state.operator !== ""){
            handleMe= props.handleSecond;
        }
        else{      
            handleMe= props.handle;
        }
    
    
    return(
        <button value={props.value} className="normal" onClick={handleMe}>{props.value}</button>
    )
}

export default ValueButton;