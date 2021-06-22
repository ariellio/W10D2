import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test.jsx';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js';


document.addEventListener("DOMContentLoaded", () =>  {
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const content = document.getElementById("content");
    ReactDOM.render(<Test />, content);
});

