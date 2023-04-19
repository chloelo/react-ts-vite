import {
  createContext,
  useContext,
  useReducer,
} from 'react';

export type TaskType = {
  id: number;
  text: string;
  done: boolean;
};
export type TasksType = typeof initialTasks;

const TasksContext = createContext<TasksType | null>(null);
type DispatchType = React.Dispatch<ActionType>
const TasksDispatchContext = createContext<DispatchType>(() => { });

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
export type ActionType =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskType }
  | { type: 'deleted'; id: number };

function tasksReducer(tasks: TasksType, action: ActionType) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + (action as any).type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
