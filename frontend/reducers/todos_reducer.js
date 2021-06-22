import { RECEIVE_TODOS } from '../actions/todo_actions.js'
import { RECEIVE_TODO } from '../actions/todo_actions.js'

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };  

const todosReducer = (state = initialState, action) => {
    debugger
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach (todo => {
                newState[todo.id] = todo;
            })
            return newState;
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;
        default:
            return state;        
    }
}

export default todosReducer;

// const newTodos = [
//     {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     },
//     {
//         id: 3,
//         title: "wash cat",
//         body: "with shampoo",
//         done: false
//     }
// ]