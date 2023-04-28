import React, { useState } from 'react';

const Todolist = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: '동글하기', checked: true },
    { id: '456', text: '오구송부르기', checked: true },
    { id: '234', text: '슈배방구하기', checked: false },
  ]);
  const removeItem = (id) => {
    console.log(id);
    // e.target.parentElement.remove();
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input
            type='checkbox'
            name={`item${item.id}`}
            id={`item${item.id}`}
            value=''
            className={item.checked ? 'inp-check' : ''}
            checked={item.checked}
          />
          <label htmlFor={item.id}>{item.text}</label>
          <button
            type='button'
            onClick={() => removeItem(item.id)}
          >
            삭제하기
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
