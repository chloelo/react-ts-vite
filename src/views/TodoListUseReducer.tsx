import {
  useReducer,
  useState,
} from 'react';

import { ACTION_TYPE } from '../Actions';

type ACTIONTYPE =
  | { type: ACTION_TYPE.ADD; payload: { todoContent: string } }
  | { type: ACTION_TYPE.TOGGLE; payload: { id: number } }
  | { type: ACTION_TYPE.DELETE; payload: { id: number } };
// type ACTIONTYPE = {
//   type: ACTION_TYPE;
//   payload: {
//     todoContent?: string;
//     id?: number;
//   };
// };
type TodoType = {
  id: number;
  todoContent: string;
  complete: Boolean;
};
type Todos = TodoType[];

// 負責改變 state
const reducer = (todos: Todos, action: ACTIONTYPE) => {
  // 無法宣告在 switch case 外面，因為個別 case 的 payload 不一樣
  // const { todoContent, id } = action.payload;
  switch (action.type) {
    case ACTION_TYPE.ADD:
      const { todoContent } = action.payload;
      return [...todos, newTodo(todoContent ?? '')];
    case ACTION_TYPE.TOGGLE:
      const { id } = action.payload;
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION_TYPE.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
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
type TodoListProps = {
  todo: TodoType;
  dispatch: React.Dispatch<ACTIONTYPE>;
};
const TodoList = ({ todo, dispatch }: TodoListProps) => {
  return (
    <div>
      <span style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
        {todo.todoContent}
      </span>
      <button
        type='button'
        onClick={() =>
          dispatch({ type: ACTION_TYPE.TOGGLE, payload: { id: todo.id } })
        }
      >
        {todo.complete ? 'Cancel' : 'Complete'}
      </button>
      <button
        type='button'
        onClick={() =>
          dispatch({ type: ACTION_TYPE.DELETE, payload: { id: todo.id } })
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
    dispatch({ type: ACTION_TYPE.ADD, payload: { todoContent: todoContent } });
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
          <TodoList todo={todo} dispatch={dispatch} />
        ))}
      </div>
      <hr />
    </>
  );
}
