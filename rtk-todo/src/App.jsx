import { AddTodo, TodosList } from './components';
const App = () => {
  return (
    <div className='container min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-sm w-full  flex flex-col'>
        <AddTodo />
        <TodosList />
      </div>
    </div>
  );
};

export default App;
