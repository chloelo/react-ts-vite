import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

export default function App() {
  return (
    <>
      <h3 className='text-center '>此章節為觀念解說，沒有挑戰任務</h3>
      <p>練習把context與reducer合併</p>
      <h4> dispatch 搭配 context 宣告型別的寫法： </h4>
      <p>
        <code>{`type DispatchType = React.Dispatch<ActionType>`}</code> <br />
        <code>{`const TasksDispatchContext = createContext<DispatchType>(() => { })`}</code>
      </p>
      <div className='challenge-wrap'>
        <div className='challenge03-07-wrap'>
          <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
          </TasksProvider>
        </div>
      </div>
    </>
  );
}
