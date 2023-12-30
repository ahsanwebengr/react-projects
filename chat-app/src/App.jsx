import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Loader from './components/Loader';

// Lazy-loaded components
const Login = lazy(() => import('./pages/Login'));
const ChatBox = lazy(() => import('./pages/ChatBox'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route
                path='/chat'
                element={
                  <ProtectedRoute>
                    <ChatBox />
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
