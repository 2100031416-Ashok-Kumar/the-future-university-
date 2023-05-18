// App.tsx
import React, { useState } from 'react';
import TodoRow from './TodoRow';
import './App.css';

interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        isChecked: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id: number, isChecked: boolean) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isChecked };
        }
        return todo;
      })
    );
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoRow
            key={todo.id}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
            onUpdate={(newText: string) => handleUpdateTodo(todo.id, newText)}
            onToggle={handleToggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
