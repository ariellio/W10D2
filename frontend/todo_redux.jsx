import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test.jsx';


document.addEventListener("DOMContentLoaded", () =>  {
    const content = document.getElementById("content");
    ReactDOM.render(<Test />, content);
});

// document.addEventListener("event", callbackFunction)
