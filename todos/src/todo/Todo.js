import { useContext, useState } from "react";
import { store } from "./Provider";
import TodoList from "./TodoList";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngry } from '@fortawesome/free-solid-svg-icons'

export default function Todo() {
  const globalState = useContext(store);
  const [text, setText] = useState("");
  const todos = globalState.state.todos;
  const count = globalState.state.count;
  const activeTodos = globalState.state.activeTodos;
  const completeTodos = globalState.state.completeTodos;
  const { dispatch } = globalState;
  function handleSubmit(e) {
    e.preventDefault();
    const action = { type: "ADD_TODO", payload: text };
    const count = {type:'INCREMENT'}
   
    dispatch(action)
    dispatch(count)
    
    //console.log(count)
    setText('');
  }
  return (
    <div>
      <header className="header">todos</header>
      {/* <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button> */}
      <div className="formBox">
      <form onSubmit={handleSubmit} action="" >
       
       {/* <button onClick={()=>dispatch({type:'INCREMENT_COUNT_BY',payload:10})}>increment10</button> */}
      
        <input
          value={text}
          type="text"
          className="input"
          onChange={(e) => setText(e.target.value)}
          placeholder=" What need to be done?" 
        />
      </form>
        <TodoList todos={todos} />
      <div className='footer'>
        <span className='count'> {count} items left</span>
        <span className='all'onClick={() => dispatch({type:"ALL"})}>All</span>
        <span className=''onClick={() => dispatch({type:"ACTIVE"})}>Active</span>
        <span className='completed' onClick={() => dispatch({type:"COMPLETED"})}>Completed</span>
        <span className='hidden'> Clear Completed</span>
      </div>
      </div>
    </div>
    
  );
}
