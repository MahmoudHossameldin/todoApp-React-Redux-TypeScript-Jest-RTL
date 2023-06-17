import React from 'react';
import { Todo } from '../../types';
import styles from './styles.module.css';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={styles.group}>
      <li className={`${todo.done ? styles.done : ''}`}>
        <input
          type='checkbox'
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
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
