import React from 'react';
import { TodoListItem } from './todolistitem';
import '../App.css'

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul >
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} />
      ))}
    </ul>
  );
};