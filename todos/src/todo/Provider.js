import { createContext, useReducer } from "react";
const initialState = { todos: [],count:0 };
export const store = createContext(initialState);
const { Provider } = store;
const id = () => Math.random().toString() + "-" + Math.random().toString();
function TodoReducer(state, action) {
  console.log(state.todos,action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: id(), description: action.payload, isDone: false }],
      };
    case 'INCREMENT':
        return {...state, count: state.count + 1};
    case 'DECREMENT':
        return {...state, count: state.count - 1};
    case 'INCREMENT_COUNT_BY':
          return {...state, count: state.count + action.payload} ;  
    case 'DEL_TODO':
    return {...state,todos:state.todos.filter(item=>item.id!==action.payload)}      
    default:
      throw new Error();
  }
  
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};

export default StateProvider;

   // case 'DEL_TODO':
    //   return {...state,todo:state.todos.filter(item=>item.id!==action.payload)}