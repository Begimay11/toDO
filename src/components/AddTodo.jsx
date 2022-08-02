import ToDo from "./ToDo";

function AddToDo(props){
    return <ul>
            {props.todos.items.map((todo,index)=> {
                return (
                    <ToDo style={{textDecoration:props.todos.simple[index]?'line-through' : '' }} key={todo.id} name = {todo.name}  handleCheck={props.handleCheck} indexOfElement = {index}/>
                )
            })}
        </ul>
}
export default AddToDo