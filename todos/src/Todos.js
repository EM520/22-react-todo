import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
const initialState = { todos: [] };
// const textStore = createContext(initialState)
// const {Provider} = textStore

export default function Todos() {
  const { text, setText } = useState("");
  const { todos, setTodos } = useState([]);

  // const globlaState = useState(textStore)
  // const  todos = globlaState.state.todos
  // const {dispatch} = globlaState
  // function handleSubmit(e){
  //     e.preventDefault()
  //     const action = {type:'ADD_TODO',payload:text}
  //     dispatch(action)
  // }
  // useEffect((){
  //     setText()

  // }
  //   console.log(setText);

  return (
    <div>
      <header className="header">todos</header>
      <form onSubmit={() => setTodos(todos.push(text))}>
        <input
          type="text"
          className="input"
          onChange={() => setText("x")}
          placeholder="&#x2304;  What need to be done?"
        />
      </form>
      <ul>{todos ? todos.map((todo) => <p>{todos}</p>) : null}</ul>
    </div>
  );
}
// action="" onSubmit={handleSubmit}
