import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Props {
    addTodo: AddTodo;
  }

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
    <div className="input-group mb-3">
        
      
      <div className="input-group-prepend">
        <input
          className="form-control"
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }} />
        </div>
        <button
            className="btn btn-outline-secondary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            addTodo(text);
            setText('');
          }}>
          Send 
        </button>
      </div>
    );
};