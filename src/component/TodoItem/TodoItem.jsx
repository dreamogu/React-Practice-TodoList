import React from 'react';
import { BsTrash } from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, text, done } = todo;
  const handleChange = (e) => {
    const done = e.target.checked ? true : false;
    onUpdate({ ...todo, done });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={done === true}
        onChange={handleChange}
        id={id}
      />
      <label
        htmlFor={id}
        className={styles.text}
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button
          className={styles.button}
          onClick={handleDelete}
          role='삭제하기 버튼'
        >
          <BsTrash />
        </button>
      </span>
    </li>
  );
}
