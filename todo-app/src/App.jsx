import Form from './components/Form';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>To do app list</h1>
      <Form />
      <Tasks />
    </div>
  );
};

export default App;
