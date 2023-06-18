import React from 'react';
import { Todo } from '../../types';
import styles from './styles.module.css';
import { toggleTodo } from '../../store/slices/todosSlice';
import { useAppDispatch } from '../../store';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={styles.group}>
      <li className={`${todo.done ? styles.done : ''}`}>
        <label htmlFor={`todo-checkbox-${todo.id}`}>
          <input
            type='checkbox'
            checked={todo.done}
            onChange={handleToggleTodo}
            className={styles.checkbox}
            id={`todo-checkbox-${todo.id}`}
            data-testid='todo-checkbox'
          />
          <p className={styles.text}>{todo.text}</p>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
