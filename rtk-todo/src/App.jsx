import { AddTodo, TodosList } from './components';
const App = () => {
  return (
    <div className='container min-h-screen flex flex-col items-center justify-center w-full max-w-screen-2xl'>
      <div className='max-w-screen-sm w-full flex flex-col'>
        <AddTodo />
      </div>
      <TodosList />
    </div>
  );
};

export default App;
