import { useState } from "react";
import { AddTodoForm } from './addtodoform';
import { TodoList } from "./todolist";
import './css/mess.css';
import { transform } from "typescript";


interface Props {
    todo: Todo;
  }

  export const TodoListItem: React.FC<Props> = ({ todo }) => {
    return (
      <div className="chat">
        <table>
        <tr>
          <div className="bubble you">
              <td>
                <label>
                {todo.text}
                </label>
              </td>
          </div>
        </tr>
        <tr>
          <div className="bubble me">
            <td>
            <label>
              
            </label>
            </td>
          </div>
        </tr>
        </table>
      </div>
    );
  };

  const initialTodos: Todo[] =  [
    {
      text: "I'm RABETSIMAMANGA Ikoriantsoa Harena Andrianina IGGLIA 3 n 66"
    },
  ];

  function Messenger() {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo: AddTodo = (text: string) => {
      const newTodo = { text };
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