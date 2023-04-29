import React, { useState } from 'react';
import TodoInsert from '../TodoInsert/TodoInsert';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: '동글하기', done: true },
    { id: '456', text: '오구송부르기', done: true },
    { id: '234', text: '슈배방구하기', done: false },
  ]);
  const handleAdd = (addTodo) => setTodos([...todos, addTodo]);
  // 기존 todo에 새로운 addTodo를 추가해준다.

  const handleUpdate = (updated) =>
    setTodos(todos.map((el) => (el.id === updated.id ? updated : el)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((el) => deleted.id !== el.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          // li component 단위로 수정하기
          <li key={item.id}>
            <input
              type='checkbox'
              checked={item.done === true}
              onChange={handleUpdate}
            />
            <label>{item.text}</label>
            <button onClick={() => handleDelete(item)}>삭제하기</button>
          </li>
        ))}
      </ul>
      <TodoInsert onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
