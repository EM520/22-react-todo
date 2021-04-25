import { createContext, useReducer } from "react";
const initialState = { todos: [] ,trackingTodos: [],count: 0 };
export const store = createContext(initialState);
const { Provider } = store;

const id = () => Math.random().toString() + "-" + Math.random().toString();
function TodoReducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
     const newState= {
      ...state,
      todos: [...state.todos,{ id: id(), description: action.payload, isDone: false }],
      trackingTodos: [...state.trackingTodos, { id: id(), description: action.payload,isDone:false }],
       
    };
    // console.log(newState,"add_todo")
        return newState
      
    case 'INCREMENT':
        return {...state,count:state.count+1}
   
    case "CHECK_TODO":
      const newTodos = state.todos.map((item) => {
        const todoToToggleId=action.payload
        if(item.id === todoToToggleId) {
          // flip the status "!isDone"
          return {...item,isDone:!item.isDone}
          
        } else {
        return {...item}
        }
      })
      // console.log(newTodos)
      
       return { ...state, 
        todos: newTodos,
        trackingTodos:newTodos,
        count:state.count-1
        };

    case 'DEL_TODO':
          const todoId = action.payload
          const afterDelTodos = state.todos.filter((item)=>item.id!==todoId)
          console.log(afterDelTodos,"afterDel")
          console.log(state,"STATE")
          return {...state,
             todos:afterDelTodos ,
             count:state.count -1 };
            

    case 'ALL':
       const allTodos = {...state,todos:state.trackingTodos }
      console.log(allTodos,"all")
          return allTodos

    case 'COMPLETED':
      const completeTodos= state.trackingTodos.filter((item)=>
        item.isDone)
        console.log(completeTodos,"comptodo")
      return{ ...state,
        todos:completeTodos,
         
      }
      //  const markCompleteTodos = { ...state,todos:state.todos.map((item)=>
        
      //   item.id=== action.payload ?
      //     {...item,isDone:true}:item)}

      //     const completeTodos=markCompleteTodos.todos.find((x)=>x.isDone===true)

      //   console.log(markCompleteTodos,"mark") 
      //   console.log(completeTodos,"completed") 
     
      //   return markCompleteTodos
    

      //  let newgenres =genres.map((item)=>{
      //   let found = userGenres.find((x)=>x.id ==item.id)
      //   return found? {...item,active:true}:{...item,active:false}
      // })

    case 'ACTIVE':
      const activeTodos= state.trackingTodos.filter((item)=>
        !item.isDone)
        console.log(activeTodos,"activetodos")
      return{ ...state,todos:activeTodos}
               
    case 'CLEAR':
        const clearedTodos={...state,todos:state.todos.filter((item) =>item.isDone===false)}
        console.log(clearedTodos,"clearComp")
        return clearedTodos ;
    default:
           throw new Error()
    }
  }
    
  const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  
  export default StateProvider   
  // case 'COMPLETED':
  //   return { ...state,todos: state.todos.filter(item=>item.isDone==true)}