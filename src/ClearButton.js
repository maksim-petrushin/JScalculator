const ClearButton = (props)=>{

    return(
        <button className="delButton" onClick={props.handleDelete}>{props.value}</button>
    )
}

export default ClearButton;