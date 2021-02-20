import { useContext, useState } from "react";
import { store } from "./Provider";
export default function TodoList(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <ul>
      
      {props.todos.map((todo) => {
        //console.log(todo);
        return (
           <li  
            key={todo.id}
            id="todoList"
            className={todo.isDone == false ? "" : "done"}>
           <div id='checkmark' >
            <input
              onChange={() =>
                dispatch({ type: "CHECK_TODO", payload: todo.id })
              }
              checked={todo.isDone}
              className="radio"
              type="radio"
            />
            {" "}
            {todo.description}
            </div>

            <div className='hiddenBtn'>
            <button className="delBtn" 
              onClick={() => dispatch({ type: "DEL_TODO", payload: todo.id })}
            >
              &#10060;
            </button>
            </div>

          </li>
        );
      })}
    </ul>
  );
}

// isDone == false ? (<li key={todo.id}>{todo.description}</li>) : <li className="done" key={todo.id}>{todo.description}</li>
// <li key={todo.id} className={isDone == false ? "" : "done"}>{todo.description}</li>

// let arr = [1,2,3,1,1]
// arr.filter()

// onClick={() => dispatch({ type: "DEL_TODO", payload: null })}

// onClick={()=> todo.isDone=true }
