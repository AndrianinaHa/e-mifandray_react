import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sign from './components/sign';
import { useState } from 'react';
import { TodoList } from './todolist';
import { AddTodoForm } from './addtodoform';

function Index(){
     return <h2>Home</h2>;
  }

  function AppRouter() {
      return (
       <Router>
         <div className="header">
                <ul className="nav justify-content-center">
                  <li className="nav-item active">
                    <Link to="/components/sign" className="nav-link" style={{ color: 'grey' }}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/App" className="nav-link" style={{ color: 'grey' }}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/components/Login" className="nav-link" style={{ color: 'grey' }}>Login</Link>
                  </li>
                </ul>
           <Route path="/App" exact component={App} />
           <Route path="/components/Sign" exact component={Sign} />
           <Route path="/components/login" component={Login} />
         </div>
         </Router>
      );
     }

    
     interface Props {
      todo: Todo;
      toggleTodo: ToggleTodo;
    }

    export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
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
        text: 'Walk the dog',
        complete: false,
      },
      {
        text: 'Write app',
        complete: true,
      },
    ];
  function App() {
    const [todos, setTodos] = useState(initialTodos);
    const toggleTodo = (selectedTodo: Todo) => {
      const newTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string) => {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    };
    return (
      <>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </>
      );
  }
  

export default AppRouter ;
