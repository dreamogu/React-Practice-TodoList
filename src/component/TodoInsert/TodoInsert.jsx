import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInsert = ({ onAdd }) => {
  // input에 입력된 '상태'
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 페이지 새로고침 방지
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, done: false });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todo'
        title='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoInsert;
