// TodoRow.tsx
import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

interface TodoRowProps {
  key: number;
  todo: {
    id: number;
    text: string;
    isChecked: boolean;
  };
  onDelete: () => void;
  onUpdate: (newText: string) => void;
  onToggle: (id: number, isChecked: boolean) => void;
}

const TodoRow: React.FC<TodoRowProps> = ({ todo, onDelete, onUpdate, onToggle }) => {
  const handleCheckboxToggle = (isChecked: boolean) => {
    onToggle(todo.id, isChecked);
  };

  return (
    <div className="todo-row">
      <Checkbox label={todo.text} checked={todo.isChecked} onChange={handleCheckboxToggle} />
      <Button size="small" variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoRow;
