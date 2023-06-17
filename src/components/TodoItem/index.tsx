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

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={styles.group}>
      <li className={`${todo.done ? styles.done : ''}`}>
        <input
          type='checkbox'
          checked={todo.done}
          onChange={() => handleToggleTodo(todo.id)}
          className={styles.checkbox}
          id='checkTodo'
          data-testid='todo-checkbox'
        />
        <p className={styles.text}>{todo.text}</p>
      </li>
    </div>
  );
};

export default TodoItem;
