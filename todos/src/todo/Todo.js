import { useContext, useState } from "react";
import { store } from "./Provider";
import TodoList from "./TodoList";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngry } from '@fortawesome/free-solid-svg-icons'

export default function Todo() {
  const globalState = useContext(store);
  const [text, setText] = useState("");
  
  const todos = globalState.state.todos;
  // const trackingTodos = globalState.state.trackingTodos;
  const count = globalState.state.count;
  const { dispatch } = globalState;
  const found = todos.find((x)=>x.isDone===true)
  const activeTodos= todos.filter((item)=>item.isDone===false)
  console.log(found,"foundtrue")
  console.log(todos,"todos list array")
  // console.log(todos,"trackingTodos")
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
      {/* <button className='count'> {activeTodos.length} items left</button> */}
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
      <div className={todos.length>=1?'footer':"hidden"}>
        <button className='count'> {activeTodos.length} items left</button>
        <button id='all' onClick={() => dispatch({type:"ALL"})}>All</button>
        <button className='active'onClick={() => dispatch({type:"ACTIVE"})}>Active</button>
        <button className='completed' onClick={() => dispatch({type:"COMPLETED"})}>Completed</button>
          
        <button 
        className={ found?"":"hidden"}
        onClick={()=>dispatch({type:"CLEAR"})}> 
        Clear Completed
        </button>
      
      </div>
      </div>
    </div>
    
  );
}
