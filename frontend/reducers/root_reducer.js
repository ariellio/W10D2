import {combineReducers} from 'redux'
import todosReducer from 'todos_reducer.js'
// import todoReducer from 'todo_reducer.js'


const rootReducer = combineReducers({
    todos:  todosReducer,
    // todo: todoReducer
})

export default rootReducer;