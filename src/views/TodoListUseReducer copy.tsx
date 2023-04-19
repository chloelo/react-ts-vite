import {
  useReducer,
  useState,
} from 'react';

import { ACTION } from '../Actions';

type ACTIONTYPE =
  | { type: 'ADD'; payload: Todo }
  | { type: 'TOGGLE'; payload: { id: number } }
  | { type: 'DELETE'; payload: { id: number } };

type Todo = {
  id: number;
  todoContent: string;
  complete: Boolean;
};
type Todos = Todo[];

// 負責改變 state
const reducer = (todos: Todos, action: ACTIONTYPE) => {
  const { todoContent, id } = action.payload;
  switch (action.type) {
    case ACTION.ADD:
      return [...todos, newTodo(todoContent)];
    case ACTION.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION.DELETE:
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
};
const newTodo = (todoContent: string) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent,
    complete: false,
  };
};
const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.complete ? 'line-through' : null }}>
        {todo.todoContent}
      </span>
      <button
        type='button'
        onClick={() =>
          dispatch({ type: ACTION.TOGGLE, payload: { id: todo.id } })
        }
      >
        {todo.complete ? 'Cancel' : 'Complete'}
      </button>
      <button
        type='button'
        onClick={() =>
          dispatch({ type: ACTION.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};
export default function App() {
  const [todoContent, setTodoContent] = useState('');
  // 第一個參數放state名稱
  // 第二個參數 dispatch：用來觸發 reducer 裡面的 function
  // useReducer 要傳入兩個參數進去，第一個是自定義的reducer，第二個是 init State也就是最初始的state值
  const [todos, dispatch] = useReducer(reducer, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 使用 dispatch，傳遞資料，觸發我們定義的 reducer
    dispatch({ type: ACTION.ADD, payload: { todoContent: todoContent } });
  };
  return (
    <>
      <div>
        <h4>練習用 reduce 寫簡易的todo list </h4>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </form>
        {todos.map((todo) => (
          <Todo todo={todo} dispatch={dispatch} />
        ))}
      </div>
      <hr />
    </>
  );
}
