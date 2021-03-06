import React from 'react';
import TodoListItem  from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

export default (props) => {
  
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {props.todos.map(todo => {
          return <TodoListItem todo={todo} key={todo.id}/>
          //  return <li key={todo.id}>{todo.title}</li>
        })}        
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  )
}
