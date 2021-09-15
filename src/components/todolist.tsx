import React from 'react';
import { TodoListItem } from './messenger';

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