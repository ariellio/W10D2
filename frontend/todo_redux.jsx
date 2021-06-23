import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test.jsx';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions.js';
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions.js';



document.addEventListener("DOMContentLoaded", () =>  {
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    const content = document.getElementById("content");
    ReactDOM.render(<Test />, content);
});

