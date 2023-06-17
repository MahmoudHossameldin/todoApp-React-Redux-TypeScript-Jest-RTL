import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/index';
import { addTodo } from '../../store/slices/todosSlice';
import styles from './styles.module.css';

const TodoInput: React.FC = () => {
  const [currentTodo, setCurrentTodo] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (currentTodo.trim() !== '') {
        const newTodo = {
          id: new Date().getTime(),
          text: currentTodo,
          done: false,
        };
        dispatch(addTodo(newTodo));
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
