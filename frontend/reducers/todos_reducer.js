import { RECEIVE_TODOS } from './actions/todos_actions.js'

const todosReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TODOS:
            newState[action.todos.id] = action.todos;
            return newState;

        default:
            return state;
        
    }
}

export default todosReducer;

