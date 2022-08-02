function ToDo(props){
    const name = props.name
    const complete = props.handleCheck
    const index = props.indexOfElement 
    return (
        <li style={props.style} onClick={()=> {complete(index)}}>{name}</li>
    )
}
export default ToDo