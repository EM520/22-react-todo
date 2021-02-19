// import {stateProvider} from './Provider'
export default function TodoList(props) {
  return (
    
    <ul>
       
      {props.todos.map((todo) => {
        //console.log(todo);
        return  <li key={todo.id} id="todoList" className={todo.isDone == false ? "" : "done"} 
        
        >
        <input onClick={()=> todo.isDone=true }className="checkmark" type="radio"/>
        
        {" "}
        {todo.description}
        </li>
      })}
    </ul>
  );
}

// isDone == false ? (<li key={todo.id}>{todo.description}</li>) : <li className="done" key={todo.id}>{todo.description}</li>
// <li key={todo.id} className={isDone == false ? "" : "done"}>{todo.description}</li>

// let arr = [1,2,3,1,1]
// arr.filter()

// onClick={() => dispatch({ type: "DEL_TODO", payload: null })}