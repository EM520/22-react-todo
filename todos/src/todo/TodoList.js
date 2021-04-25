import { useContext } from "react";
import { store } from "./Provider";
export default function TodoList(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
 function showClearBtn(){
  let checkTodo = document.getElementById("checktodo");
  let clearBtn = document.getElementById("clear");
  if (checkTodo.checked == true){
    clearBtn="clear"
  } else {
    clearBtn="";
  }
}
  return (
    <ul>
      
      {props.todos.map((todo) => {
        console.log(todo);
        return (
          <div className="todoLine" >
           <li  
            key={todo.id}
            className="todoList"
            id={todo.isDone === false ? "" : "done"}>
           <div id='checkmark' >
            <input
              onChange={() =>
                dispatch({ type: "CHECK_TODO",payload: todo.id })  
              }
              checked={todo.isDone}
              type="checkbox"
              id="checktodo"
              onClick={()=>showClearBtn()}
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
          
          </div>
        );
      })}
    </ul>
  );
}


