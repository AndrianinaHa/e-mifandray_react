import { useState } from "react";
import { AddTodoForm } from './addtodoform';
import { TodoList } from "./todolist";


interface Props {
    todo: Todo;
  }

  export const TodoListItem: React.FC<Props> = ({ todo }) => {
    return (
      <li className="Message">
        <label>
          {' '}
          {todo.text}
        </label>
      </li>
    );
  };

  const initialTodos: Todo[] =  [
    {
      text: 'Hey! ',
      complete: false,
    },
    {
      text: 'How are you doing?',
      complete: true,
    },
  ];

  function Messenger() {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo: AddTodo = (text: string) => {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    };
    return (
      <>
        <TodoList todos={todos} />
        <AddTodoForm addTodo={addTodo} />
      </>
      );
  }

  export default Messenger;