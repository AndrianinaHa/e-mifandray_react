interface Todo {
    text: string;
  }

  type ToggleTodo = (selectedTodo: Todo) => void;

  type AddTodo = (text: string) => void;