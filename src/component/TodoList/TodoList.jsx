import React, { useEffect, useState } from 'react';
import TodoInsert from '../TodoInsert/TodoInsert';
import TodoItem from '../TodoItem/TodoItem';
import TodoHeader from '../TodoHeader/TodoHeader';
import styles from './TodoList.module.css';

const TodoList = () => {
  // useState 콜백함수로 전달해야 다시 호출되지 않는다.
  const [todos, setTodos] = useState(readTodosFromLocalStorage);
  const [filter, setFilter] = useState('All');
  const handleAdd = (addTodo) => setTodos([...todos, addTodo]);
  // 기존 todo에 새로운 addTodo를 추가해준다.

  const handleUpdate = (updated) =>
    setTodos(todos.map((el) => (el.id === updated.id ? updated : el)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((el) => deleted.id !== el.id));

  const handleFilter = (filter) => setFilter(filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    <>
      <TodoHeader onFilter={handleFilter} />
      <section className={styles.container}>
        <ul className={styles.list}>
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
    </>
  );
};

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export default TodoList;
