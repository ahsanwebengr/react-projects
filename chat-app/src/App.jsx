import React from 'react';
import Login from './pages/Login';
import { Navbar } from './components/Navbar';
import ChatBox from './pages/ChatBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<ProtectedRoute>
              <ChatBox />
            </ProtectedRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;