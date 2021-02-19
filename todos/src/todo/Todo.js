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
  const { dispatch } = globalState;
  function handleSubmit(e) {
    e.preventDefault();
    const action = { type: "ADD_TODO", payload: text };
    const count = {type:'INCREMENT'}
    // const del = { type: "DEL_TODO", payload: todos.id }

    dispatch(action)
    // dispatch(del)
    dispatch(count)
    // dispatch({type:'INCREMENT_COUNT_BY'})
    //console.log(count)
    setText('');
  }
  return (
    <div>
      <header className="header">todos</header>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
      <form onSubmit={handleSubmit} action="" >
       
       {/* <button onClick={()=>dispatch({type:'INCREMENT_COUNT_BY',payload:10})}>increment10</button> */}
      
        <input
          value={text}
          type="text"
          className="input"
          onChange={(e) => setText(e.target.value)}
          placeholder=" What need to be done?" 
        />
      <TodoList todos={todos} />
      

      <div className='footer'>
      <span className='count'> {count} items left</span>
      <span className=''>All</span>
      <span className=''>Active</span>
      <span className=''>Completed</span>
      <span className='hidden'> Clear Completed</span>
      </div>
      </form>
     
    </div>
    
  );
}
