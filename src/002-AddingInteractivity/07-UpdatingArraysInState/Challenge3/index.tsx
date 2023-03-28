import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import './index.css'

let nextId = 3;

export type DataTodo = {
  id: number;
  title: string;
  done: boolean;
}
export type DataTodos = DataTodo[]

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ])
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
  }



  function handleChangeTodo(nextTodo: DataTodo) {
    const newTodos = todos.map(item => {
      if (item.id === nextTodo.id) {
        return {
          id: nextTodo.id,
          title: nextTodo.title,
          done: nextTodo.done
        }
      } else {
        return item
      }
    })
    setTodos(newTodos)
    // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter(todo => todo.id !== todoId))

    // const index = todos.findIndex(t =>
    //   t.id === todoId
    // );
    // todos.splice(index, 1);
  }

  return (
    <>
      <h1>Challenge 3 of 4: Fix the mutations using non-mutative methods </h1>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
