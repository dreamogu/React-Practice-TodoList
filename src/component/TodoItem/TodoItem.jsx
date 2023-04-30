import React from 'react';
import { BsTrash } from 'react-icons/bs';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { text, done } = todo;
  const handleChange = (e) => {
    const done = e.target.checked ? true : false;
    onUpdate({ ...todo, done });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li>
      <input
        type='checkbox'
        checked={done === true}
        onChange={handleChange}
      />
      <label>{text}</label>
      <button
        onClick={handleDelete}
        role='삭제하기 버튼'
      >
        <BsTrash />
      </button>
    </li>
  );
}
