import { RECEIVE_TODO } from './actions/todo_actions.js'

const todoReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;

        default:
            return state;

    }
}

export default todoReducer;

