import { useState } from "react"

function Form(props){
    const [name,setName] = useState('')
    const inputChangeHandler = (event)=> {
        setName(event.target.value)
        console.log(name);
    }
    // const btnChangeHandler = (event)=> {
    //     setName(event.target.value)
    //     console.log(name);
    // }
    const submitHandler = (event)=> {
        event.preventDefault()
        props.itemsHandler(name)
        setName('')
    }
    return (
        <form onSubmit={submitHandler }>
            <input value={name} type="text" onChange={inputChangeHandler}/>
            <button>Add</button>
        </form>
    )
}
export default Form