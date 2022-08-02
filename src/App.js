import Form from './components/Form';
import AddToDo from './components/AddTodo';
import './App.css';
import { useEffect, useReducer } from 'react';

const todosHandler = (prevState,action)=> {
if(action.type === 'ITEMS'){
  return{
    ...prevState,
    items: [
      ...prevState.items,
      {name: action.value, id: Math.random().toString()}
    ]
  }
}
if(action.type === 'SIMPLE_TODO'){
  return {
    ...prevState,
    simple:{
      ...prevState.simple,
      [action.index]: !prevState.simple[action.index]
    }
  }
}
}
const initializer = ()=> JSON.parse(localStorage.getItem('items'))|| {
  items: [],
  simple: {}
}
function App() {
  const [todos,dispatchTodos] = useReducer(todosHandler,{
    items: [],
    simple: {}
  },initializer)

  const itemsHandler = (name)=> {
    dispatchTodos({type: 'ITEMS',value:name})
  } 
  const handleCheck = (index)=> {
    dispatchTodos({type:'SIMPLE_TODO',index:[index]})
  }
  useEffect(()=> {
    localStorage.setItem('items',JSON.stringify(todos),[todos])
  })
  return (
    <div className="App">
      <Form itemsHandler={itemsHandler}/>
      <AddToDo todos={todos} handleCheck={handleCheck}/>
    </div>
  );
}

export default App;
