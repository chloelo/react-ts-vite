import { useState } from 'react';
import { useImmer } from 'use-immer';

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
  // const [todos, setTodos] = useState(
  //   initialTodos
  // );
  const [todos, updateTodos] = useImmer(
    initialTodos
  );
  function handleAddTodo(title: string) {
    updateTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      })
    })

    // 挑戰三：不能更改原陣列的寫法
    // setTodos([
    //   ...todos,
    //   {
    //     id: nextId++,
    //     title: title,
    //     done: false
    //   }
    // ])

    // 原題目：
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
  }



  function handleChangeTodo(nextTodo: DataTodo) {
    // 題目：
    // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;

    // 挑戰三的寫法：
    // const newTodos = todos.map(item => {
    //   if (item.id === nextTodo.id) {
    //     return {
    //       id: nextTodo.id,
    //       title: nextTodo.title,
    //       done: nextTodo.done
    //     }
    //   } else {
    //     return item
    //   }
    // })
    // setTodos(newTodos)

    // 挑戰四：immer 寫法一(改動到原陣列) 
    updateTodos(draft => {
      const todo = draft.find(t =>
        t.id === nextTodo.id
      );
      if (todo) { // 因為find可能會找不到，找不到就會回傳undefined，所以要增加這個判斷
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;
      }
    })


    // 挑戰四：immer 寫法二 (不改動到原陣列)
    // updateTodos(todos.map(todo => {
    //   if (todo.id === nextTodo.id) {
    //     return nextTodo;
    //   } else {
    //     return todo;
    //   }
    // }));
  }

  function handleDeleteTodo(todoId: number) {

    // 挑戰四：immer寫法一：
    updateTodos(draft => {
      const index = draft.findIndex(t =>
        t.id === todoId
      );
      draft.splice(index, 1);
    })

    // 挑戰四：immer 寫法二 (不改動到原陣列)
    // updateTodos(
    //   todos.filter(t => t.id !== todoId)
    // );

    // 挑戰三的寫法：
    // setTodos(todos.filter(todo => todo.id !== todoId))

    // 題目：
    // const index = todos.findIndex(t =>
    //   t.id === todoId
    // );
    // todos.splice(index, 1);
  }

  return (
    <>
      <h1>Challenge 4 of 4: Fix the mutations using Immer  </h1>
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
