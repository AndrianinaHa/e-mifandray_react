import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mess.css'


interface Props {
    addTodo: AddTodo;
  }

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
      <div className="input-group texte">
            <input
              className="form-control"
              type="text"
              value={text}
              onChange={e => {
                setText(e.target.value);
              }} />
              <div className="input-group-append">
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
      </div>
    );
};