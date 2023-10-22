import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import UserCreate from './components/UserCreate';
import UserUpdate from './components/UserUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<UserCreate />} />
        <Route path='/update/:id' element={<UserUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
