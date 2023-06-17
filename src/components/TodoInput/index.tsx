import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import styles from './styles.module.css';

type TodoInputProps = {
  addTodo: (text: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [currentTodo, setCurrentTodo] = useState<string>('');

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (currentTodo.trim() !== '') {
        addTodo(currentTodo);
        setCurrentTodo('');
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <>
      <input
        className={styles.todoInput}
        type='text'
        value={currentTodo}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        placeholder='Add a todo...'
      />
    </>
  );
};

export default TodoInput;
