
import StateProvider from './Provider'
import Todo from './Todo'

export default function TodoApp() {
    return <StateProvider>
        <Todo />
    </StateProvider>
}

// Provider:provide the value (state)
//action:object that describes what happened {type:"ADD_TODO", payload:"text"}
//reducer:takes the state and action and reduces to a new state
//store is a combination of reducers that hold state