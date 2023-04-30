import React, { useState } from 'react';
import TodoInsert from '../TodoInsert/TodoInsert';
import TodoItem from '../TodoItem/TodoItem';
import TodoHeader from '../TodoHeader/TodoHeader';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: '동글하기', done: true },
    { id: '456', text: '오구송부르기', done: true },
    { id: '234', text: '슈배방구하기', done: false },
  ]);
  const [filter, setFilter] = useState('All');
  const handleAdd = (addTodo) => setTodos([...todos, addTodo]);
  // 기존 todo에 새로운 addTodo를 추가해준다.

  const handleUpdate = (updated) =>
    setTodos(todos.map((el) => (el.id === updated.id ? updated : el)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((el) => deleted.id !== el.id));

  const handleFilter = (filter) => setFilter(filter);

  const getFilteredTodos = (filter) => {
    if (filter === 'All') {
      return todos;
    } else if (filter === 'Active') {
      return todos.filter((todo) => !todo.done);
    } else if (filter === 'Complete') {
      return todos.filter((todo) => todo.done);
    }
  };
  const filteredTodo = getFilteredTodos(filter);

  return (
    <section>
      <TodoHeader onFilter={handleFilter} />
      <ul>
        {/* header에서 선택된게 doneTrue 라면 list doneTrue만 보여주기 / doneFalse라면 donefalse만 보여주기 */}
        {filteredTodo.map((item) => (
          // li component 단위로 수정하기

          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <TodoInsert onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
